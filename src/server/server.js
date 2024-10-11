import cors from 'cors';
import express, { json } from 'express';
import { readFile, writeFile } from 'fs/promises'; // promises를 사용하여 비동기 처리를 쉽게 함
import path from 'path';
import { fileURLToPath } from 'url'; // import.meta.url을 사용하기 위한 모듈

// 현재 모듈의 경로를 얻기 위해 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());  
app.use(json()); 

const userDataPath = path.join(__dirname, '../json/user.json'); // 절대 경로로 설정

// 고객 데이터를 불러오는 API
app.get('/customers', async (req, res) => {
    try {
        const data = await readFile(userDataPath, 'utf8');
        res.send(JSON.parse(data));
    } catch (err) {
        res.status(500).send(`Error reading data: ${err.message}`);
    }
});

// 포인트를 수정하는 API
app.patch('/customers/:phone', async (req, res) => {
    const phone = req.params.phone;
    const { points } = req.body;

    try {
        const data = await readFile(userDataPath, 'utf8');
        let customers = JSON.parse(data);
        const customerIndex = customers.findIndex(cust => cust.phone === phone);

        if (customerIndex !== -1) {
            customers[customerIndex].points = points; // 포인트 업데이트
            await writeFile(userDataPath, JSON.stringify(customers, null, 2)); // 수정된 고객 데이터 파일에 저장
            res.send(customers[customerIndex]); // 수정된 고객 정보 반환
        } else {
            res.status(404).send('Customer not found'); // 고객을 찾을 수 없는 경우
        }
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`); // 오류 발생 시 메시지 반환
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});