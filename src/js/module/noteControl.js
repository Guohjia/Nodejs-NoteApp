var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
var Event = require('./event.js');


var NoteControl = (function () {
    function load() {
        $.get('/api/notes')
            .done(function (result) {
                if (result.status == 0) {
                    $.each(result.data, function (index, article) {
                        new Note({
                            id: article.id,
                            content: article.text,
                            date:article.updatedAt
                        });
                    });
                    Event.fire('WaterFall');
                    Toast(result.successMsg,800)
                } else {
                    Toast(result.errorMsg);
                }
            })
            .fail(function () {
                Toast('网络异常');
            });

    }

    function add() {
        new Note();
    }

    return {
        load: load,
        add: add
    }

})();

module.exports.NoteControl = NoteControl