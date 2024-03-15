import {configure} from '@reskript/settings';

export default configure(
    'webpack',
    {
        // https://reskript.dev/docs/settings/feature-matrix
        featureMatrix: {
            stable: {},
            dev: {},
        },
        // https://reskript.dev/docs/settings/build
        build: {
            appTitle: '产品中心',
        },
        // https://reskript.dev/docs/settings/dev-server
        devServer: {
            port: 9001,
            // TODO: 修改后端API代理的配置
            apiPrefixes: ['/api'],
            defaultProxyDomain: 'example.com',
        },
    }
);
