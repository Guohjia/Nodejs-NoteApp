var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note

//获取所有notes
router.get('/notes', function(req, res, next) {
  var opts = {raw: true}
  if(req.session && req.session.user){
    console.log(opts)
    opts.where = {uid:req.session.user.id }
  }else{
    return res.send({status: 1, errorMsg: '点击登录开始添加便签吧！'})
  }
    // console.log(2222)
  Note.findAll(opts).then(function(notes) {
    res.send({status: 0, data: notes});
  }).catch(function(){
    res.send({ status: 1,errorMsg: '数据库异常'});
  });
});



//新增
router.post('/notes/add', function(req, res, next){
  if(!req.session || !req.session.user){
    return res.send({status: 1, errorMsg: '请先登录'})
  }
  if (!req.body.note) {
    return res.send({status: 2, errorMsg: '内容不能为空'});
  }

  var note = req.body.note;
 
  var uid = req.session.user.id;

//   console.log({text: note, uid: uid})
  Note.create({text: note, uid: uid}).then(function(){
    res.send({status: 0})
  }).catch(function(){
    res.send({ status: 1,errorMsg: '数据库异常或者你没有权限'});
  })
})


//修改
router.post('/notes/edit', function (req, res, next) {
    if (!req.session || !req.session.user) {
        return res.send({ status: 1, errorMsg: '请先登录' })
    }
    var noteId = req.body.id;
    var note = req.body.note;
    var uid = req.session.user.id;
    Note.update({ text: note }, { where: { id: noteId, uid: uid } }).then(function (lists) {
        if (lists[0] === 0) {
            return res.send({ status: 1, errorMsg: '你没有权限' });
        }
        res.send({ status: 0 })
    }).catch(function (e) {
        res.send({ status: 1, errorMsg: '数据库异常或者你没有权限' });
    })
})

/*删除note*/
router.post('/notes/delete', function (req, res, next) {
    if (!req.session || !req.session.user) {
        return res.send({ status: 1, errorMsg: '请先登录' })
    }

    var noteId = req.body.id
    var uid = req.session.user.id;
    
    // console.log(req.body)
    Note.destroy({ where: { id: noteId, uid: uid } }).then(function (deleteLen) {
      // console.log(deleteLen)
      //   if (deleteLen === 0) {
      //       return res.send({ status: 1, errorMsg: '你没有权限' });
      //   }
        res.send({ status: 0 })
    }).catch(function (e) {
        res.send({ status: 1, errorMsg: '请求失败，数据库异常' });
    })
})


//清楚全部
router.post('/notes/deleteAll', function (req, res, next) {
    // if (!req.session || !req.session.user) {
    //     return res.send({ status: 1, errorMsg: '请先登录' })
    // }
    // var opts = {raw: true}
    // var noteId = req.body.id
    console.log(req.session.user.id)
    var uid = req.session.user.id;
    
    Note.destroy({ where: { uid: uid } }).then(function (deleteLen) {
      // console.log(deleteLen)
      //   if (deleteLen === 0) {
      //       return res.send({ status: 1, errorMsg: '你没有权限' });
      //   }
        res.send({ status: 0 })
    }).catch(function (e) {
        res.send({ status: 1, errorMsg: '请求失败，数据库异常' });
    })
})

module.exports = router;