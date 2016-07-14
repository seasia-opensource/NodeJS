{
  "id": "58d98b1b-400b-acff-2130-92382d31f948",
  "name": "IHG Game",
  "timestamp": 1454345233304,
  "requests": [
    {
      "collectionId": "58d98b1b-400b-acff-2130-92382d31f948",
      "id": "3bf08ddc-2d05-dd2d-63b8-65e99b8d809f",
      "name": "GET responses",
      "description": "",
      "url": "https://ihg-rewards-game-api.herokuapp.com/responses",
      "method": "GET",
      "headers": "Content-Type: application/json\n",
      "data": "{\n  \"playerName\" : \"Andrew\",\n  \"scenarioName\" : \"Book NYC\",\n  \"responses\" : [\n  {\n\t  \"questionText\" : \"You transfer some points into Miles for a flight to NY. You want to redeem for a stay in Times Square and book …\",\n\t  \"choiceText\" : \"The InterContinental, Times Square\",\n\t  \"reasonText\" : \"Becuase I like InterContinental\"\n  }]\n}",
      "dataMode": "raw",
      "timestamp": 0,
      "version": 2,
      "time": 1454368093543
    },
    {
      "collectionId": "58d98b1b-400b-acff-2130-92382d31f948",
      "id": "62d8ad38-d941-4f95-2bcb-691fb15e074f",
      "name": "Add responses",
      "description": "",
      "url": "https://ihg-rewards-game-api.herokuapp.com/responses",
      "method": "POST",
      "headers": "Content-Type: application/json\n",
      "data": "{\n  \"playerName\" : \"Andrew\",\n  \"scenarioName\" : \"Book NYC\",\n  \"responses\" : [\n  {\n\t  \"questionText\" : \"You transfer some points into Miles for a flight to NY. You want to redeem for a stay in Times Square and book …\",\n\t  \"choiceText\" : \"The InterContinental, Times Square\",\n\t  \"reasonText\" : \"Becuase I like InterContinental\"\n  }]\n}",
      "dataMode": "raw",
      "timestamp": 0,
      "version": 2,
      "time": 1454368081980
    },
    {
      "collectionId": "58d98b1b-400b-acff-2130-92382d31f948",
      "id": "8ca89856-1fa6-273d-92eb-6dc53111d981",
      "name": "GET scenarios",
      "description": "",
      "url": "https://ihg-rewards-game-api.herokuapp.com/scenarios",
      "method": "GET",
      "headers": "Content-Type: application/json\n",
      "data": "{\n  \"playerName\" : \"Andrew\",\n  \"scenarioName\" : \"Book NYC\",\n  \"responses\" : [\n  {\n\t  \"questionText\" : \"You transfer some points into Miles for a flight to NY. You want to redeem for a stay in Times Square and book …\",\n\t  \"choiceText\" : \"The InterContinental, Times Square\",\n\t  \"reasonText\" : \"Becuase I like InterContinental\"\n  }]\n}",
      "dataMode": "raw",
      "timestamp": 0,
      "version": 2,
      "time": 1454368101553
    },
    {
      "collectionId": "58d98b1b-400b-acff-2130-92382d31f948",
      "id": "bcf7eeb3-b6e6-bc7f-eae3-3365f4054649",
      "name": "Get single question",
      "description": "",
      "url": "https://ihg-rewards-game-api.herokuapp.com/questions/5chndPqqDYIgk0wKu2COGu",
      "method": "GET",
      "headers": "Content-Type: application/json\n",
      "data": "[\"5chndPqqDYIgk0wKu2COGu\", \"6CKB4eNKzmQw6u0OKKWGos\"]\n",
      "dataMode": "raw",
      "timestamp": 0,
      "version": 2,
      "time": 1454368125392
    },
    {
      "collectionId": "58d98b1b-400b-acff-2130-92382d31f948",
      "id": "c479b9de-c771-cbb0-dc7e-6a2d29ffe2c8",
      "name": "Get multiple questions",
      "description": "",
      "url": "https://ihg-rewards-game-api.herokuapp.com/questions",
      "method": "POST",
      "headers": "Content-Type: application/json\n",
      "data": "[\"5chndPqqDYIgk0wKu2COGu\", \"6CKB4eNKzmQw6u0OKKWGos\"]\n",
      "dataMode": "raw",
      "timestamp": 0,
      "version": 2,
      "time": 1454368118440
    }
  ]
}