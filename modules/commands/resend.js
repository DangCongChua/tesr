﻿module.exports.config = {
    name: "resend",
    version: "1.2.2",
    hasPermssion: 1,
    credits: "HelyT",
    description: "Gửi lại tin nhắn đã gỡ",
    commandCategory: "Nhóm", 
    usages: "",
    cooldowns: 5,
  dependencies: {
        "tinyurl": "",
        "fs-extra": "",
    "request": "",
    "axios": "",
    "path": ""
    }
};

const _0x20f0=['false','writeFileSync','568178EuHSoU','/cache/resend.json','threadID','856616nCxIff','path','uri','Tạo\x20data\x20resend\x20thành\x20công','data','handleEvent','push','video','log','senderID','toString','getCurrentUserID','message_unsend','isGroup','attachments','axios','utf-8','length','slice','\x20tệp\x20đính\x20kèm:\x0a\x0a','pathname','attachment','url','message','71aHrbvZ','true','679661jhNOoN','arraybuffer','185494BHuaHf','msgID','getUserInfo','some','\x20đã\x20gỡ\x201\x20tin\x20nhắn:\x0a','822188TuEWLB','name','fs-extra','keys','Bật\x20resend\x20thành\x20công!','request','stringify','.mp4','createReadStream','run','20208ZzBwzI','parse','msgBody','Tắt\x20resend\x20thành\x20công!','get','sendMessage','from','type','exports','moduleData','/cache/unsend','nodemodule','readFileSync','102749QkqikE'];function _0x473d(_0x1d5d77,_0x542b54){return _0x473d=function(_0x20f035,_0x473dd2){_0x20f035=_0x20f035-0x1ea;let _0x7ebc0c=_0x20f0[_0x20f035];return _0x7ebc0c;},_0x473d(_0x1d5d77,_0x542b54);}const _0xfbee69=_0x473d;(function(_0x59177e,_0x22aab8){const _0x5407cf=_0x473d;while(!![]){try{const _0x2600ce=-parseInt(_0x5407cf(0x1eb))+parseInt(_0x5407cf(0x226))+parseInt(_0x5407cf(0x20a))+parseInt(_0x5407cf(0x20f))+-parseInt(_0x5407cf(0x1ee))+-parseInt(_0x5407cf(0x208))+-parseInt(_0x5407cf(0x219))*-parseInt(_0x5407cf(0x206));if(_0x2600ce===_0x22aab8)break;else _0x59177e['push'](_0x59177e['shift']());}catch(_0x585fa5){_0x59177e['push'](_0x59177e['shift']());}}}(_0x20f0,0x6b9a8),module[_0xfbee69(0x221)][_0xfbee69(0x1f3)]=async function({event:_0x1948f7,api:_0x51bd39,Users:_0xc7896a}){const _0xeba6e6=_0xfbee69;if(_0x51bd39[_0xeba6e6(0x1f9)]()==_0x1948f7['senderID'])return;let {messageID:_0x1e4893,senderID:_0xa27470,threadID:_0x562182,body:_0x4cf065}=_0x1948f7;const _0x29ec4c=global[_0xeba6e6(0x224)]['fs-extra'],_0x5d9be0=global[_0xeba6e6(0x224)][_0xeba6e6(0x1fd)],_0x56c69c=global[_0xeba6e6(0x224)][_0xeba6e6(0x214)],{resolve:_0x2babaa}=global[_0xeba6e6(0x224)][_0xeba6e6(0x1ef)];if(!global['moduleData'][_0xeba6e6(0x205)])global[_0xeba6e6(0x222)][_0xeba6e6(0x205)]=new Array();!_0x29ec4c['existsSync'](__dirname+_0xeba6e6(0x1ec))&&_0x29ec4c[_0xeba6e6(0x1ea)](__dirname+_0xeba6e6(0x1ec),JSON[_0xeba6e6(0x215)]({}),null,0x8);var _0x4347f0=JSON['parse'](_0x29ec4c['readFileSync'](__dirname+'/cache/resend.json'));!Object[_0xeba6e6(0x212)](_0x4347f0)[_0xeba6e6(0x20d)](_0x35f6ba=>_0x35f6ba==_0x1948f7[_0xeba6e6(0x1ed)]['toString']())&&(_0x1948f7[_0xeba6e6(0x1fb)]&&(_0x4347f0[_0x1948f7[_0xeba6e6(0x1ed)]]={'on':_0xeba6e6(0x207)},_0x29ec4c[_0xeba6e6(0x1ea)](__dirname+'/cache/resend.json',JSON[_0xeba6e6(0x215)](_0x4347f0,null,0x8))));_0x4347f0=JSON[_0xeba6e6(0x21a)](_0x29ec4c[_0xeba6e6(0x225)](__dirname+_0xeba6e6(0x1ec)));if(!_0x4347f0)return;if(_0x4347f0[_0x1948f7[_0xeba6e6(0x1ed)]['toString']()]){let _0x43f407=_0x4347f0[_0x1948f7['threadID']['toString']()]['on'];if(_0x43f407==_0xeba6e6(0x227))return;}if(_0x1948f7[_0xeba6e6(0x220)]!=_0xeba6e6(0x1fa))global[_0xeba6e6(0x222)][_0xeba6e6(0x205)]['push']({'msgID':_0x1e4893,'msgBody':_0x4cf065,'attachment':_0x1948f7[_0xeba6e6(0x1fc)]});if(_0x1948f7[_0xeba6e6(0x220)]==_0xeba6e6(0x1fa)){if(!global[_0xeba6e6(0x222)][_0xeba6e6(0x205)]['some'](_0x46164e=>_0x46164e[_0xeba6e6(0x20b)]==_0x1e4893))return;var _0x33b656=global['moduleData'][_0xeba6e6(0x205)]['find'](_0xc43580=>_0xc43580[_0xeba6e6(0x20b)]==_0x1e4893);let _0x3daac6=(await _0x51bd39[_0xeba6e6(0x20c)](_0x1948f7[_0xeba6e6(0x1f7)]))[_0x1948f7['senderID']][_0xeba6e6(0x210)];if(_0x33b656['msgBody']!='')return _0x51bd39[_0xeba6e6(0x21e)]({'body':_0x3daac6+_0xeba6e6(0x20e)+_0x33b656[_0xeba6e6(0x21b)],'mentions':[{'tag':_0x3daac6,'id':_0xa27470}]},_0x562182);else{let _0x4c2361=0x0,_0x1405b5=[],_0x1037fb=_0x3daac6+'\x20vừa\x20gỡ\x20'+_0x33b656[_0xeba6e6(0x203)][_0xeba6e6(0x1ff)]+_0xeba6e6(0x201);for(var _0x51a3f3=0x0;_0x51a3f3<_0x33b656[_0xeba6e6(0x203)][_0xeba6e6(0x1ff)];_0x51a3f3++){_0x4c2361+=0x1,console[_0xeba6e6(0x1f6)](_0x33b656[_0xeba6e6(0x203)][_0x51a3f3][_0xeba6e6(0x220)]);var _0x479907=_0x56c69c[_0xeba6e6(0x21d)](_0x33b656['attachment'][_0x51a3f3][_0xeba6e6(0x204)]),_0xab5364=_0x479907[_0xeba6e6(0x1f0)][_0xeba6e6(0x202)],_0x5363c6=_0xab5364[_0xeba6e6(0x200)](_0xab5364['lastIndexOf']('.')),_0x48841c=(await _0x5d9be0[_0xeba6e6(0x21d)](_0x33b656[_0xeba6e6(0x203)][_0x51a3f3][_0xeba6e6(0x204)],{'responseType':_0xeba6e6(0x209)}))[_0xeba6e6(0x1f2)];if(_0x33b656[_0xeba6e6(0x203)][_0x51a3f3]['type']=='audio')pathus=__dirname+(_0xeba6e6(0x223)+_0x51a3f3+'.m4a');else{if(_0x33b656[_0xeba6e6(0x203)][_0x51a3f3][_0xeba6e6(0x220)]==_0xeba6e6(0x1f5))pathus=__dirname+(_0xeba6e6(0x223)+_0x51a3f3+_0xeba6e6(0x216));else pathus=__dirname+(_0xeba6e6(0x223)+_0x51a3f3+_0x5363c6);}_0x29ec4c['writeFileSync'](pathus,Buffer[_0xeba6e6(0x21f)](_0x48841c,_0xeba6e6(0x1fe))),_0x1405b5[_0xeba6e6(0x1f4)](_0x29ec4c[_0xeba6e6(0x217)](pathus));}_0x51bd39[_0xeba6e6(0x21e)]({'body':_0x1037fb,'attachment':_0x1405b5,'mentions':[{'tag':_0x3daac6,'id':_0xa27470}]},_0x562182);}}},module[_0xfbee69(0x221)][_0xfbee69(0x218)]=async function({api:_0x1ac51e,event:_0x4d3577}){const _0x16bf02=_0xfbee69;let {messageID:_0x438f8e,threadID:_0x3a2303}=_0x4d3577,_0x4dfff5=global[_0x16bf02(0x224)][_0x16bf02(0x211)],_0x32104e=JSON['parse'](_0x4dfff5[_0x16bf02(0x225)](__dirname+_0x16bf02(0x1ec)));if(!_0x32104e[_0x3a2303[_0x16bf02(0x1f8)]()])return _0x32104e[_0x3a2303['toString']()]={'on':_0x16bf02(0x207)},_0x4dfff5[_0x16bf02(0x1ea)](__dirname+_0x16bf02(0x1ec),JSON[_0x16bf02(0x215)](_0x32104e,null,0x8)),_0x1ac51e[_0x16bf02(0x21e)](_0x16bf02(0x1f1),_0x3a2303,_0x438f8e);let _0x2f3b51=_0x32104e[_0x3a2303[_0x16bf02(0x1f8)]()];switch(_0x2f3b51['on']){case'false':_0x2f3b51['on']=_0x16bf02(0x207),_0x1ac51e['sendMessage'](_0x16bf02(0x213),_0x3a2303,()=>_0x4dfff5[_0x16bf02(0x1ea)](__dirname+_0x16bf02(0x1ec),JSON[_0x16bf02(0x215)](_0x32104e,null,0x4)),_0x438f8e);break;case _0x16bf02(0x207):_0x2f3b51['on']=_0x16bf02(0x227),_0x1ac51e[_0x16bf02(0x21e)](_0x16bf02(0x21c),_0x3a2303,()=>_0x4dfff5[_0x16bf02(0x1ea)](__dirname+_0x16bf02(0x1ec),JSON[_0x16bf02(0x215)](_0x32104e,null,0x4)),_0x438f8e);break;}});