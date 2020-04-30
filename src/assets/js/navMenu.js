export const navMenu = [
    {
        auth_name: '测试模块',
        auth_index: 'index',
        icon: 'icon-shezhi',
        // http://img1.imgtn.bdimg.com/it/u=3528268786,2374113427&fm=26&gp=0.jpg
        key: 'home',
        children: [
            {
                auth_name: '模块分类',
                auth_index: 'informType',
                route: 'informType',
                key: 'informType',
                active: false
            },
            {
                auth_name: '模块创建',
                auth_index: 'createInform',
                route: 'createInform',
                key: 'createInform',
                active: false
            },
            {
                auth_name: '模块数据',
                auth_index: 'informData',
                route: 'informData',
                key: 'informData',
                active: false
            }

        ]
    },
    {
        auth_name: '测试模块2',
        auth_index: 'indexs',
        icon: 'icon-shezhi',
        key: 'ccc',
        children: [
            {
                auth_name: '模块分类',
                auth_index: 'informType1',
                route: 'informType1',
                key: 'informType1',
                active: false
            },
            {
                auth_name: '模块创建',
                auth_index: 'createInform1',
                route: 'createInform1',
                key: 'createInform1',
                active: false
            },
            {
                auth_name: '模块数据',
                auth_index: 'informData1',
                route: 'informData1',
                key: 'informData1',
                active: false
            }

        ]
    },

]