// 定义可能的值
var possibleValues = ['https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index.json', 'https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index1.json', 'https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index2.json', 'https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index3.json', 'https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index4.json'];

var abcd="https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index.json", abcd1="https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index1.json", abcd2="https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index2.json", abcd3="https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index3.json", abcd4="https://lcshenxian.github.io/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/guochan/index4.json";


// 洗牌算法函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 随机替换值
shuffleArray(possibleValues);

// 随机选择新的值并替换变量的内容
  abcd = possibleValues[0];
  abcd1 = possibleValues[1];
  abcd2 = possibleValues[2];
  abcd3 = possibleValues[3]; 
  abcd4 = possibleValues[4]; 
