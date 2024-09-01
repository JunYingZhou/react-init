import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import postcsspxtoviewport from 'postcss-px-to-viewport';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ command, mode }) => {
  // const envDir = path.resolve(__dirname, `./env/${process.env.VITE_PROJECT}`); // 设置环境变量的目录
  const envDir = process.cwd(); // 设置环境变量的目录
  const envPrefix = 'VITE_'; // 设置环境变量的前缀，暴露import.meta.env.VITE_BASEURL使用
  const env = loadEnv(mode, envDir, envPrefix); // 获取环境变量
  const { VITE_BASEURL, VITE_CSS_PREFIX, VITE_PROJECT, VITE_PHONE } = env;
  const outDir = `./dist/${VITE_PROJECT + VITE_CSS_PREFIX}`; // 设置打包和预览目录

  return {
    plugins: [
      react(),
      // 使用React时不需要 vue 和相关的插件
    ], // 配置插件
    base: './', // 设置打包路径
    mode: mode, // production || development 用于开发的时候使用某个环境的配置，默认development
    clearScreen: true, // 启动时清空控制台
    envPrefix: envPrefix, // 设置环境变量的前缀，暴露import.meta.env.VITE_BASEURL使用
    envDir: envDir, // 设置环境变量的目录
    cacheDir: path.resolve(__dirname, './cache'), // 设置缓存目录
    server: {
      port: 5173, // 启动端口号
      host: true, // 开启热点ip地址
      open: true, // 启动是否自动打开浏览器预览
      strictPort: false, // 端口被占用时是否直接退出
      cors: true, // 允许跨域
      headers: {}, // 设置请求头
      proxy: {
        '/api': {
          target: VITE_BASEURL, // 代理目标地址
          changeOrigin: true, // 是否开启代理
          rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
        },
      },
    },
    build: {
      rollupOptions: {
        plugins: [visualizer()],
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js', // 设置打包时js文件名
          entryFileNames: 'assets/js/[name]-[hash].js', // 设置打包时入口文件名
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 设置打包时静态资源文件名
          // assetFileNames: 'assets/images/[name]-[hash].[ext]', // 设置打包时静态资源文件名
        },
      },
      chunkSizeWarningLimit: 1500, // 打包时超过1500kb的提示
      target: 'modules', // 设置打包环境
      outDir: outDir, // 设置打包输出目录
      assetsDir: './assets', // 设置打包输出静态资源目录
      assetsInlineLimit: 1024 * 1024, // 设置打包时静态资源小于1M时，打包成base64格式变成内联样式，只要js加载出来，图片就会加载出来，0延迟
      reportCompressedSize: false, // 打包时是否生成打包体积报告，提升构建速度
      emptyOutDir: true, // 打包时是否清空打包目录
    },
    preview: {
      outDir: outDir, // 设置预览输出目录
      port: 4173, // 预览端口号
      host: true, // 预览时是否开启热点ip地址
      open: true, // 预览时是否自动打开浏览器预览
      strictPort: false, // 端口被占用时是否直接退出
      cors: true, // 允许跨域
    },
    css: {
      modules: {
        generateScopedName: `${VITE_CSS_PREFIX}_[hash:base64:5]_[local]`, // 设置css模块化的类名
        globalModulePaths: [], // 代表不想参与到css模块化的路径
      },
      postcss: {
        plugins: [
          ...(VITE_PHONE === 'true'
            ? [
              postcsspxtoviewport({
                unitToConvert: 'px', // 要转化的单位
                viewportWidth: 375, // UI设计稿的宽度，pc=1920，phone=375
                unitPrecision: 6, // 转换后的精度，即小数点位数
                propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
                fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
                selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
                minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                replace: true, // 是否转换后直接更换属性值
                landscape: false, // 是否处理横屏情况
              }),
            ]
            : []),
          tailwindcss, // 引入tailwindcss
          autoprefixer,
        ],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // 设置@为src目录的别名
      },
    },
  };
});
