import React from "react";

function App() {
  const jsonData = [
    {
      "item_id": 3,
      "itemname": "패딩",
      "price": 599000,
      "detail": "이뻐요",
      "hours": 14,
      "minutes": 25,
      "stock": 300
    }
  ];

  return (
    <div>
      <h1>JSON 데이터 출력 예제</h1>
      <table>
        <thead>
          <tr>
            <th>상품 ID</th>
            <th>상품명</th>
            <th>가격</th>
            <th>상세 설명</th>
            <th>소요 시간</th>
            <th>재고 수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{jsonData[0].item_id}</td>
            <td>{jsonData[0].itemname}</td>
            <td>{jsonData[0].price.toLocaleString()}원</td>
            <td>{jsonData[0].detail}</td>
            <td>{jsonData[0].hours}시간 {jsonData[0].minutes}분</td>
            <td>{jsonData[0].stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;