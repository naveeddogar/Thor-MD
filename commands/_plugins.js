/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Thor-MD
 * @author : Saad143ss <https://github.com/Saad143ss>
 * @description : Thor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,cmd } = require('../lib')
//---------------------------------------------------------------------------
cmd({
        pattern: "plugins",
        alias :['plist'],
        category: "owner",
        desc: "Shows list of all externally installed modules",
        filename: __filename
    },
    async(Void, citel, text, { isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        let allmodtext = `*All Installed Plugins are:-*\n\n`
        allmodtext += await plugins()
        return citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "remove",
        alias :['uninstall'],
        category: "owner",
        desc: "removes external plugins.",
        filename: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(text==='all') {
         await plugindb.collection.drop()
         return citel.reply('Deleted all plugins from Secktor.')
        }
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        return citel.reply(kill)
    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "install",
        category: "owner",
        desc: "Installs external modules..",
        filename: __filename
    },
    async(Void, citel, text, {isCreator}) => {
(function(_0x32e3d0,_0x2a097d){function _0x3091bb(_0xe9e39e,_0x141c52,_0x216a56,_0xa922ba){return _0x2332(_0x216a56- -0x279,_0xa922ba);}const _0x4e9f21=_0x32e3d0();function _0x170a12(_0x1cce22,_0x44f146,_0x5524fa,_0x21cf14){return _0x2332(_0x21cf14- -0x2,_0x1cce22);}while(!![]){try{const _0x890c5f=parseInt(_0x3091bb(-0x1c5,-0x1a9,-0x1b9,-0x1c2))/(-0x5*-0x8b+0x1e8+-0x49e)+-parseInt(_0x3091bb(-0x1d2,-0x1b8,-0x1bb,-0x1bf))/(-0x2*-0x9a9+-0xa36+-0x91a)+-parseInt(_0x170a12(0xae,0xb3,0xd9,0xcb))/(0xa*0x15b+-0x17*-0x7+-0xe2c)+-parseInt(_0x3091bb(-0x1de,-0x1dd,-0x1d2,-0x1bf))/(-0x1*0xe21+0x24*0xa6+-0x933)+parseInt(_0x3091bb(-0x1af,-0x1a4,-0x19b,-0x1a9))/(0x2529+-0x49f+-0x2085)*(parseInt(_0x3091bb(-0x1ad,-0x18a,-0x1a6,-0x1a9))/(0x2*0x82f+0x61f*-0x5+-0x1*-0xe43))+parseInt(_0x3091bb(-0x1d0,-0x1e3,-0x1cc,-0x1c1))/(0x152a+0x1943*-0x1+0x10*0x42)+parseInt(_0x170a12(0xf8,0xbb,0xe4,0xd9))/(0x83*-0x23+0x16b3+-0x4c2);if(_0x890c5f===_0x2a097d)break;else _0x4e9f21['push'](_0x4e9f21['shift']());}catch(_0x2b590c){_0x4e9f21['push'](_0x4e9f21['shift']());}}}(_0x281e,0x2*0xdfa+0x2cad3+-0x15d5a));function _0x281e(){const _0x9e2056=['kcGOlISPkYKRkq','rvn2BvO','sg9ewuG','lMPZ','CMvWBhK','zxHJzxb0Aw9U','Ce1HvKO','C3vIC3rYAw5N','zwqGAw4Gu2vJAW','mJCYnZeYtuTOBfDu','BuDYCLK','BM5vz20','q2nHvKu','Dg9tDhjPBMC','Cwzdthq','odG0nZe2uLLxCMfH','kIbFAw5ZDgfSBa','qMLktK8','y29UC3rYDwn0BW','ChjVDg90ExbL','sunQvKC','B3DUzxi','x0LUDMfSAwqGvq','wfHoCKy','sw52ywXPzcbqBa','rvrQs0i','zu1qrNu','Dgv4Da','E30Uy29UC3rYDq','y3rVCIGICMv0Dq','x1bSDwDPBL8GkG','wuPRAuC','mJy5otqWALDhDvfZ','Dg9YlL8','ndC5mJbeD1DSufm','CxvVDgvK','CuDqruW','ygbG','yxbWBhK','x19WCM90B19F','AhjLzG','zxHLyW','y1bTq1a','CxrKqwK','CMv0DxjUicHMDq','A2rJDe4','D3jPDgvgAwXLuW','mte0mZu0wM1QEvvh','veTUshC','C01wtgq','DxjS','wwHTuLa','A2jgEhO','ntrOBKv2qMK','BMn0Aw9UkcKG','yMv0zM0','zxjYB3i','DwDPBGOGygbG','vg1zA0q','DgfIBgu','C2f2zq','mte2mdq2ngLfr0zqrG','y29UC29Szq','s0POtue','mti1nJvdsg5hD0y','yMLUza','DxrMoa','rhP2rwu','Dw5SAw5Ru3LUyW','zMP6CKy'];_0x281e=function(){return _0x9e2056;};return _0x281e();}const _0x4e5c21=(function(){let _0x8430bc=!![];return function(_0x36f5e9,_0x491ec8){const _0x629960=_0x8430bc?function(){function _0x44b759(_0x174153,_0x2c66ff,_0x2a436c,_0x13a2d0){return _0x2332(_0x13a2d0-0x3cd,_0x2c66ff);}if(_0x491ec8){const _0x2ab844=_0x491ec8[_0x44b759(0x49d,0x483,0x4a2,0x491)](_0x36f5e9,arguments);return _0x491ec8=null,_0x2ab844;}}:function(){};return _0x8430bc=![],_0x629960;};}()),_0x2a8892=_0x4e5c21(this,function(){const _0x23e6dc={};function _0x47a97(_0x4b5b1c,_0x475519,_0x211304,_0x6f811b){return _0x2332(_0x475519-0x3b1,_0x6f811b);}_0x23e6dc[_0x47a97(0x461,0x46e,0x482,0x453)]=_0x452219(0x128,0x113,0x10d,0x10e)+'+$';function _0x452219(_0x234184,_0x3d5796,_0x3ec1d8,_0x3db066){return _0x2332(_0x3db066-0x2a,_0x3ec1d8);}const _0x3f2cb6=_0x23e6dc;return _0x2a8892[_0x452219(0xd7,0xdd,0xef,0xd5)]()['search']('(((.+)+)+)'+'+$')[_0x452219(0xce,0xed,0xf1,0xd5)]()[_0x452219(0xd4,0xc8,0xcb,0xda)+'r'](_0x2a8892)['search'](_0x3f2cb6['YJkiG']);});_0x2a8892();function _0x2332(_0x19b614,_0x130e94){const _0x591f2f=_0x281e();return _0x2332=function(_0x115159,_0x545231){_0x115159=_0x115159-(0xa5+-0x2191+0x218f);let _0x1ec8e4=_0x591f2f[_0x115159];if(_0x2332['EJWiNI']===undefined){var _0xa57ae9=function(_0x7b5731){const _0x5e2292='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x45a022='',_0x5dea6a='',_0x3ce49d=_0x45a022+_0xa57ae9;for(let _0x1a87df=0x18ae+-0x1*-0x2231+-0x3adf,_0x36d6ab,_0x5ccbf6,_0x3d8dea=-0x1144+-0x717+0x2b*0x91;_0x5ccbf6=_0x7b5731['charAt'](_0x3d8dea++);~_0x5ccbf6&&(_0x36d6ab=_0x1a87df%(0x524*-0x3+-0x13c8+-0x7*-0x508)?_0x36d6ab*(-0x3b*-0xa9+-0x1*-0x1ff5+-0x88*0x85)+_0x5ccbf6:_0x5ccbf6,_0x1a87df++%(-0xa*0x1a5+-0x20ed*0x1+0x3163))?_0x45a022+=_0x3ce49d['charCodeAt'](_0x3d8dea+(0x30*-0x7+-0x2*-0x2a6+-0x1*0x3f2))-(-0x3*-0xb61+0xf43*-0x1+-0x12d6)!==-0x1*0x7b1+-0x1*0x2063+0x2814?String['fromCharCode'](0x1c61*-0x1+-0x24a6+-0x3ab*-0x12&_0x36d6ab>>(-(-0x25d8+-0x12ee*0x1+-0x4*-0xe32)*_0x1a87df&0x20c*-0x9+0x8*0x2+0x931*0x2)):_0x1a87df:-0x1ee+-0x1752+0x1940){_0x5ccbf6=_0x5e2292['indexOf'](_0x5ccbf6);}for(let _0xec04a4=0x169b*0x1+-0x3f*-0x70+-0x10b9*0x3,_0x4dff6b=_0x45a022['length'];_0xec04a4<_0x4dff6b;_0xec04a4++){_0x5dea6a+='%'+('00'+_0x45a022['charCodeAt'](_0xec04a4)['toString'](-0x83+0xcdd*0x2+0x2f*-0x89))['slice'](-(-0x3b6+-0x1e80+-0x111c*-0x2));}return decodeURIComponent(_0x5dea6a);};_0x2332['qGEdPk']=_0xa57ae9,_0x19b614=arguments,_0x2332['EJWiNI']=!![];}const _0x350b49=_0x591f2f[0x269*-0x1+-0xb*0x21b+-0xcc9*-0x2],_0x456d60=_0x115159+_0x350b49,_0x23a1f9=_0x19b614[_0x456d60];if(!_0x23a1f9){const _0x2c0b84=function(_0x505008){this['NNIEhB']=_0x505008,this['xwXwMu']=[0xa*-0x36c+0x4*-0x7bd+0x1*0x412d,0x2*0x1198+0x4*0x1eb+0xd3*-0x34,0xd*0x221+0x18b2+-0x6d*0x7b],this['BmWmjD']=function(){return'newState';},this['xqkpiJ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['CiqeWD']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2c0b84['prototype']['nvZVjM']=function(){const _0x3d645f=new RegExp(this['xqkpiJ']+this['CiqeWD']),_0x40a0a9=_0x3d645f['test'](this['BmWmjD']['toString']())?--this['xwXwMu'][-0x2588+-0x181+0x270a]:--this['xwXwMu'][0x29*0x22+-0x22f3+-0xd*-0x245];return this['Bmkdrs'](_0x40a0a9);},_0x2c0b84['prototype']['Bmkdrs']=function(_0x30a698){if(!Boolean(~_0x30a698))return _0x30a698;return this['mRnnHe'](this['NNIEhB']);},_0x2c0b84['prototype']['mRnnHe']=function(_0x496682){for(let _0x1c9b56=0x7b9+0x2077*0x1+-0x2830,_0x1621fa=this['xwXwMu']['length'];_0x1c9b56<_0x1621fa;_0x1c9b56++){this['xwXwMu']['push'](Math['round'](Math['random']())),_0x1621fa=this['xwXwMu']['length'];}return _0x496682(this['xwXwMu'][0x2*-0x2f5+0x199*-0x13+0x2445]);},new _0x2c0b84(_0x2332)['nvZVjM'](),_0x1ec8e4=_0x2332['qGEdPk'](_0x1ec8e4),_0x19b614[_0x456d60]=_0x1ec8e4;}else _0x1ec8e4=_0x23a1f9;return _0x1ec8e4;},_0x2332(_0x19b614,_0x130e94);}function _0x5cd461(_0x4008dc,_0x54ec37,_0x1a37d0,_0x4f5688){return _0x2332(_0x4008dc-0x2ab,_0x4f5688);}const _0x283afd=(function(){const _0x2f796d={};_0x2f796d[_0x14070b(0x454,0x442,0x432,0x43a)]=function(_0x3d1eb0,_0x5d5e20){return _0x3d1eb0+_0x5d5e20;};function _0x1c1814(_0x249195,_0x51c681,_0x24b2b7,_0x5be35c){return _0x2332(_0x5be35c- -0x203,_0x51c681);}_0x2f796d[_0x1c1814(-0x144,-0x130,-0x13c,-0x12b)]='.js',_0x2f796d[_0x14070b(0x441,0x459,0x442,0x43e)]=_0x1c1814(-0x154,-0x13e,-0x16f,-0x14d)+_0x14070b(0x437,0x459,0x436,0x446),_0x2f796d[_0x14070b(0x414,0x42e,0x447,0x437)]=_0x1c1814(-0x14f,-0x121,-0x14f,-0x140),_0x2f796d[_0x14070b(0x442,0x42e,0x40c,0x421)]=function(_0x18a38a,_0x41dbfd){return _0x18a38a!==_0x41dbfd;};const _0x3bf56e=_0x2f796d;function _0x14070b(_0x378f34,_0x56284b,_0x34c58b,_0x271160){return _0x2332(_0x271160-0x36f,_0x378f34);}let _0x2663dc=!![];return function(_0x186d7a,_0x462773){const _0x29452b={'CcaVE':function(_0xfe8bfa,_0x341123){return _0x3bf56e['kdctN'](_0xfe8bfa,_0x341123);},'YhmRP':function(_0x545ac5,_0x2b81f9){return _0x545ac5+_0x2b81f9;},'kbFxz':_0x3bf56e['TmYkD'],'nnUgm':_0x3bf56e[_0x2b10fc(0x2dd,0x2d0,0x2d9,0x2d8)],'fjzrF':_0x3bf56e[_0x5132b3(0x72,0x7e,0x8d,0x8d)],'pMaVJ':function(_0x2d9a70,_0x3cf998){function _0x27eb26(_0x1a20e5,_0x4150d3,_0x1c58ee,_0x395413){return _0x5132b3(_0x1a20e5-0x1d4,_0x4150d3-0x42,_0x4150d3-0x78,_0x1a20e5);}return _0x3bf56e[_0x27eb26(0xeb,0xef,0xed,0xdd)](_0x2d9a70,_0x3cf998);},'BiJNO':_0x2b10fc(0x2c9,0x2e7,0x2fa,0x2e8),'qtdAi':_0x2b10fc(0x2af,0x2ad,0x292,0x2a2)},_0x1f1ced=_0x2663dc?function(){function _0x34847c(_0x4705d8,_0x166fda,_0x169dc3,_0x1aa0b7){return _0x5132b3(_0x4705d8-0x1ca,_0x166fda-0x110,_0x166fda- -0x13c,_0x169dc3);}function _0x1d7776(_0x2532e6,_0x2f5400,_0x342f9f,_0x178270){return _0x2b10fc(_0x342f9f,_0x178270- -0x93,_0x342f9f-0xa8,_0x178270-0x1a4);}if(_0x29452b[_0x34847c(-0xb3,-0xd3,-0xba,-0xd1)](_0x29452b[_0x1d7776(0x21f,0x1fe,0x231,0x21d)],_0x29452b[_0x1d7776(0x203,0x1fe,0x21e,0x21d)]))return _0x519ae3[_0x1d7776(0x252,0x254,0x241,0x250)](_0x29452b[_0x34847c(-0xbc,-0xcd,-0xc7,-0xaf)](_0x29452b[_0x1d7776(0x25f,0x247,0x25c,0x23f)](_0x5ea4c4,'/'),_0x1df903)+_0x29452b[_0x1d7776(0x242,0x25d,0x245,0x240)]),_0x2878f5[_0x1d7776(0x26c,0x244,0x251,0x256)](_0x29452b[_0x34847c(-0xb8,-0xce,-0xc9,-0xe8)]+_0xaa427b+_0x29452b[_0x1d7776(0x23c,0x26c,0x24d,0x251)]);else{if(_0x462773){if(_0x29452b[_0x34847c(-0xb4,-0xd3,-0xce,-0xbf)](_0x29452b[_0x34847c(-0xb8,-0xae,-0xcb,-0xab)],_0x29452b[_0x1d7776(0x233,0x24b,0x23b,0x237)])){const _0x41f306=_0x27c587?function(){function _0xc00cc5(_0x10f00b,_0x32e760,_0x5a6ffc,_0x42bc40){return _0x34847c(_0x10f00b-0x12b,_0x32e760- -0x20c,_0x5a6ffc,_0x42bc40-0x167);}if(_0x2d0a78){const _0x31b581=_0x780a72[_0xc00cc5(-0x2b3,-0x2bf,-0x2b6,-0x2d4)](_0x52b73a,arguments);return _0x1a3891=null,_0x31b581;}}:function(){};return _0x349928=![],_0x41f306;}else{const _0x77f760=_0x462773[_0x1d7776(0x244,0x248,0x234,0x232)](_0x186d7a,arguments);return _0x462773=null,_0x77f760;}}}}:function(){};function _0x2b10fc(_0xb32811,_0x5f3df1,_0x53e43e,_0x5ad0e5){return _0x1c1814(_0xb32811-0x104,_0xb32811,_0x53e43e-0x20,_0x5f3df1-0x404);}function _0x5132b3(_0x1533d6,_0x7bc0b6,_0x190930,_0x1e3c31){return _0x14070b(_0x1e3c31,_0x7bc0b6-0x197,_0x190930-0x29,_0x190930- -0x3aa);}return _0x2663dc=![],_0x1f1ced;};}()),_0x36a219=_0x283afd(this,function(){const _0x2ab46e={'ESvmZ':function(_0x2c675d,_0x397991){return _0x2c675d(_0x397991);},'XXNrF':function(_0x29887e,_0x2d7bfb){return _0x29887e+_0x2d7bfb;},'TKnHw':_0x498326(-0x289,-0x29a,-0x290,-0x279)+_0x5604c4(-0x1ab,-0x19c,-0x19c,-0x1a1),'qGPEL':'log','mGrrY':'warn','KJhMA':'info','eMPFu':_0x5604c4(-0x1a6,-0x1ab,-0x19a,-0x1b2),'DzvEe':_0x498326(-0x29b,-0x298,-0x2b7,-0x2a3),'DuIGa':_0x498326(-0x29e,-0x26d,-0x281,-0x27b),'DYzst':'trace','ETjKB':function(_0x167a7c,_0x40e038){return _0x167a7c<_0x40e038;},'Jvgap':'DuHSv','betfm':'EWcpv'},_0x23911b=function(){function _0x411d8f(_0x40f295,_0x1b04a6,_0x554099,_0x22f34f){return _0x498326(_0x40f295-0x182,_0x40f295,_0x554099-0x4ca,_0x22f34f-0xba);}let _0x4a064e;try{_0x4a064e=_0x2ab46e[_0x411d8f(0x264,0x23c,0x255,0x263)](Function,_0x2ab46e['XXNrF'](_0x2ab46e[_0x331a64(0x46c,0x486,0x47a,0x49b)](_0x2ab46e[_0x411d8f(0x231,0x24c,0x23e,0x240)],_0x331a64(0x468,0x48b,0x479,0x47a)+_0x411d8f(0x22f,0x212,0x22b,0x249)+'rn\x20this\x22)('+'\x20)'),');'))();}catch(_0x55e08f){_0x4a064e=window;}function _0x331a64(_0x12431f,_0x523c97,_0x4ba79d,_0x4bd52d){return _0x498326(_0x12431f-0x181,_0x12431f,_0x523c97-0x72b,_0x4bd52d-0x79);}return _0x4a064e;},_0x54896b=_0x23911b(),_0x1387da=_0x54896b['console']=_0x54896b[_0x498326(-0x26e,-0x29e,-0x27e,-0x260)]||{};function _0x498326(_0x4484e0,_0x534e30,_0x108d97,_0x4f46f5){return _0x2332(_0x108d97- -0x35a,_0x534e30);}const _0x1b7392=[_0x2ab46e[_0x5604c4(-0x1bb,-0x198,-0x1ae,-0x1c5)],_0x2ab46e[_0x5604c4(-0x1be,-0x1de,-0x1c8,-0x1be)],_0x2ab46e[_0x5604c4(-0x1a2,-0x178,-0x193,-0x1b5)],_0x2ab46e[_0x5604c4(-0x1bb,-0x1d9,-0x1b8,-0x1d3)],_0x2ab46e[_0x5604c4(-0x1aa,-0x170,-0x18f,-0x188)],_0x2ab46e['DuIGa'],_0x2ab46e['DYzst']];function _0x5604c4(_0x2b99e6,_0x8d544b,_0x54d250,_0x2d37a8){return _0x2332(_0x54d250- -0x270,_0x2d37a8);}for(let _0x28cdda=-0x1c70+-0x1*-0x462+0x180e;_0x2ab46e[_0x5604c4(-0x1d0,-0x1d1,-0x1b9,-0x1d2)](_0x28cdda,_0x1b7392['length']);_0x28cdda++){if(_0x2ab46e['Jvgap']!==_0x2ab46e[_0x498326(-0x28a,-0x270,-0x285,-0x2a8)]){const _0x23e968=_0x283afd['constructo'+'r'][_0x498326(-0x2a0,-0x29f,-0x2a9,-0x2ac)][_0x498326(-0x277,-0x25f,-0x27b,-0x282)](_0x283afd),_0x195cc2=_0x1b7392[_0x28cdda],_0x3ee28e=_0x1387da[_0x195cc2]||_0x23e968;_0x23e968[_0x498326(-0x28c,-0x27e,-0x295,-0x278)]=_0x283afd[_0x498326(-0x26a,-0x259,-0x27b,-0x294)](_0x283afd),_0x23e968[_0x5604c4(-0x1bf,-0x1e6,-0x1c5,-0x1be)]=_0x3ee28e[_0x5604c4(-0x1b0,-0x1c4,-0x1c5,-0x1cc)][_0x5604c4(-0x1a5,-0x179,-0x191,-0x191)](_0x3ee28e),_0x1387da[_0x195cc2]=_0x23e968;}else var _0x1bec02=new _0x1ac6b6(_0x1e1e37);}});_0x36a219();function _0x5ba879(_0x1dc7eb,_0x434b93,_0x227053,_0x72572a){return _0x2332(_0x1dc7eb- -0x9,_0x434b93);}if(!isCreator)return citel[_0x5cd461(0x393,0x38e,0x397,0x397)](tlang()[_0x5ba879(0xaa,0xaa,0xcb,0x98)]);let trl=text?text:citel['quoted']&&citel[_0x5ba879(0xb8,0xad,0xcb,0xa0)][_0x5ba879(0xb0,0xb3,0xc1,0x95)]?citel[_0x5ba879(0xb8,0x99,0x95,0xb7)][_0x5ba879(0xb0,0xcb,0xc9,0xb0)]:citel[_0x5cd461(0x364,0x36d,0x377,0x371)];for(let Url of isUrl(trl)){try{var url=new URL(Url);}catch{citel['reply'](_0x5cd461(0x35f,0x33d,0x380,0x374)+'rl_');}let fs=require('fs'),{data}=await axios['get'](url[_0x5cd461(0x371,0x36f,0x37b,0x373)]),lp=/pattern: ["'](.*)["'],/g[_0x5ba879(0xbe,0xc0,0xc5,0xa7)](data),lj=lp[0x25af+0x1dcd*0x1+-0x437c]['split']('\x20')[0x252+-0x85*0x2c+-0x148b*-0x1]||Math['random']()[_0x5ba879(0xa2,0x85,0xc4,0x95)](0xa0f*-0x1+0x1581+-0xb4e)[_0x5ba879(0x9c,0x8b,0x85,0x87)](-0x736*0x3+0xbc*0x22+-0x34e),l=lj['replace'](/[^A-Za-z]/g,'');await fs[_0x5ba879(0xc3,0xab,0xc9,0xc8)+'ync'](__dirname+'/'+l+_0x5ba879(0xde,0xde,0xbb,0xcb),data,_0x5ba879(0xd7,0xe1,0xc3,0xbc));try{require(__dirname+'/'+l+_0x5cd461(0x392,0x3a9,0x38d,0x3a7));}catch(_0x2bd37b){return fs[_0x5cd461(0x38d,0x36c,0x36a,0x385)](__dirname+'/'+l+'.js'),citel[_0x5ba879(0xdf,0xc5,0x102,0xbe)]('Invalid\x20Pl'+_0x5ba879(0xce,0xc8,0xb5,0xc5)+_0x2bd37b+'```');}const {plugindb}=require('../lib'),_0x6e1dd5={};_0x6e1dd5['id']=l,_0x6e1dd5[_0x5cd461(0x37b,0x35f,0x370,0x398)]=url,await new plugindb(_0x6e1dd5)[_0x5ba879(0xd1,0xb3,0xd4,0xdb)](),citel[_0x5cd461(0x393,0x375,0x374,0x38b)](_0x5ba879(0xb3,0x90,0xd6,0xcc)+l+(_0x5ba879(0xa5,0xa7,0xc1,0x85)+_0x5cd461(0x351,0x34f,0x35f,0x36a)+_0x5ba879(0xb6,0xc0,0xb1,0x99)));}
    }
)
