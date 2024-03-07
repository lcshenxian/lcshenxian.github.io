// 定义可能的值
var possibleValues = [urldizhi+'/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index.json', urldizhi+'/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index1.json', urldizhi+'/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index2.json', urldizhi+'/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index3.json', urldizhi+'/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index4.json'];

var abcd=urldizhi+"/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index.json", abcd1=urldizhi+"/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index1.json", abcd2=urldizhi+"/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index2.json", abcd3=urldizhi+"/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index3.json", abcd4=urldizhi+"/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz/dongman/index4.json";


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
