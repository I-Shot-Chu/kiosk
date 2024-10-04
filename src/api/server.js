const express = require('express');  //express 서버구축
const fs = require('fs'); // 파일 시스템 모듈 일을 읽고 쓰게 해줌
const app = express();  // Express 인스턴스 생성
const PORT = 3001;  //포트번호 30001번으로
const cors = require('cors');
app.use(cors());  // 모든 도메인에서의 요청을 허용



app.use(express.json()); //본문에 직접 파싱가능하게 해줌

// 고객 데이터를 불러오는 API
//GET 요청을 받으면 실행되는 핸들러
app.get('/customers', (req, res) => {
    fs.readFile('../json/user.json', 'utf8', (err, data) => {
      if (err) {
        //오류발생시 클라이언트에 오류메세지 띄움
        res.status(500).send('Error reading data');
      } else {
        //파일의 내용을 JSON으로 파싱하여 클라이언트에 응답
        res.send(JSON.parse(data));
      }
    });
  });

// 포인트를 수정하는 API
app.patch('/customers/:phone', (req, res) => {
  const phone = req.params.phone;
  //본문에서 포인트값 구조분해할당
  const { points } = req.body;

  fs.readFile('../json/user.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      let customers = JSON.parse(data);
      //findIndex로 전화번호가 일치하는 고객찾기
      const customerIndex = customers.findIndex(cust => cust.phone === phone);

      if (customerIndex !== -1) {
        customers[customerIndex].points = points;
        //fs.writeFile 메서드를 사용하여 파일에 수정된 정보쓰기.
        fs.writeFile('../json/user.json', JSON.stringify(customers, null, 2), (err) => {
          if (err) {
            res.status(500).send('Error writing data');
          } else {
            res.send(customers[customerIndex]);
          }
        });
      } else {
        res.status(404).send('Customer not found');
      }
    }
  });
});

//press 서버를 지정된 포트에서 실행.  서버가 요청을 받을 준비가 완료됨
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});