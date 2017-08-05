var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
var Event = require('./event.js');


var NoteControl = (function () {
    var isCreating = false
    function load() {
        $.get('/api/notes')
            .done(function (result) {
                if (result.status == 0) {
                    $.each(result.data, function (index, article) {
                        new Note({
                            id: article.id,
                            content: article.text
                        });
                    });

                    Event.fire('WaterFall');
                } else {
                    Toast(result.errorMsg);
                }
            })
            .fail(function () {
                Toast('网络异常');
            });

    }

    function add() {
        isCreating
        new Note();
    }

    return {
        load: load,
        add: add
    }

})();

module.exports.NoteControl = NoteControl