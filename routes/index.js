var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  itemList=[
    {
      name:"张三",
      age:18,
      sex:"男"
    },{
      name:"李四",
      age:20,
      sex:"女"
    },{
      name:"王五",
      age:23,
      sex:"不男不女"
    }
  ];
  swperList=[
    {
      imgUrl:"http://192.168.0.128:4000/public/images/index/1.jpg",
      title:"轮播图1",
    },{
      imgUrl:"http://192.168.0.128:4000/public/images/index/2.jpg",
      title:"轮播图2",
    },{
      imgUrl:"http://192.168.0.128:4000/public/images/index/3.jpg",
      title:"轮播图3",
    },{
      imgUrl:"http://192.168.0.128:4000/public/images/index/4.jpg",
      title:"轮播图4",
    },
  ];
  cardList=[
    {
      pid:1,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:2,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:3,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:4,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:5,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:6,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:7,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:8,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:9,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:10,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:11,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:12,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    },{
      pid:13,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  ]
  var indexList=[itemList,swperList,cardList];
  // console.log(indexList[0]);
    
  res.send(indexList);
});
router.get('/proinfo',(req,res,next)=>{
  var obj = req.query;
  var pid = obj.pid;
  console.log(obj);
  var proInfo = {}
  if(!pid){
    proInfo={
      "msg":"参数有误"
    }
  }
  else if(pid==1){
    proInfo = {
      pid:1,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==2){
    proInfo = {
      pid:2,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==3){
    proInfo = {
      pid:3,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==4){
    proInfo = {
      pid:4,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==5){
    proInfo = {
      pid:5,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==6){
    proInfo = {
      pid:6,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==7){
    proInfo = {
      pid:7,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==8){
    proInfo = {
      pid:8,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==9){
    proInfo = {
      pid:9,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==10){
    proInfo = {
      pid:10,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==11){
    proInfo = {
      pid:11,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==12){
    proInfo = {
      pid:12,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==13){
    proInfo = {
      pid:13,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }else if(pid==14){
    proInfo = {
      pid:14,
      imgUrl:"http://192.168.0.128:4000/public/images/index/a.jpeg",
      title:"标题",
      text:"爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。",
      price:20.98,
    }
  }
  res.send(proInfo);
});
module.exports = router;
