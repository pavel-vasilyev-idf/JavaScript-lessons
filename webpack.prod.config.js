const path = require('path');

module.exports = {
  
  entry: './src/index.js', //установка точки входа
  output: { //установка точки выхода
    filename: 'bundle.js', //название нашего файла
    path: path.resolve(__dirname, 'dist'), //папка, куда хотим установить наш js(собрать наш проект). Но, чтобы вебпак правильно нашел этот путь, нужно установить доп.плагин - "Path"(выше подключаем в переменную) и прописываем path.resolve
  },
  mode: 'production', //модификатор итогового файла
  module: { //набор правил в виде массива
    rules: [
      {
        test: /\.js$/, //берем все файлы js
        use: { //используем следующие опции
          loader: 'babel-loader',
          options: { //опции бабеля или пресеты(обновляются постоянно)
            presets: ['@babel/env'] //пресеты
          },
        },
        exclude: /node-modules/,
      }
    // теперь устанавливаем сам babel(на сайте вебпака в документации есть babel-loader в разделе loader) - через терминал (npm install -D babel-loader @babel/core @babel/preset-env) и пишем npm run build (собираем)
    ]
  }
  // далее меняем в стандартном конфиге script на команду "build"

  //После настройка babel(он нужен для того, чтобы все скрипты работали во всех браузерах) - часть настроек выше в "loader и options"
};