const bookName = "thamdinhnguvan6";
const passowrd = [
  "nguvan3306",
  "nguvan6490",
  "nguvan7702",
  "nguvan8831",
  "nguvan1500",
  "nguvan2506",
  "nguvan5600",
  "nguvan1963",
  "nguvan1345",
  "nguvan304",
  "nguvan2305",
  "nguvan3301",
  "nguvan5792",
];

const bookCode = [
  "edf2-a042-21a2",
  "a4a9-bcf7-9e66",
  "bd07-7564-17ab",
  "2c8a-fb54-2273",
  "6d31-7c3b-b498",
  "78dd-d55d-a418",
  "68fa-e645-2a4d",
  "56b4-6f98-0137",
  "fcb4-625b-e1b3",
  "7747-4d64-6a8a",
  "0d47-f8a8-1b2a",
  "31c0-60e8-5a4f",
  "00ba-76a4-daba",
];

for (let i = 1; i <= 13; i++) {
  const username = `${bookName}${String('000' + i).slice(-3)}`

  const data = {
    username: username,
    password: passowrd[i - 1],
  }
  await fetch('https://api.cloudbook.vn/api/v1/auth/sign-in', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(async data => {
      const code = {
        code: bookCode[i - 1],
      }
      await fetch('https://api.cloudbook.vn/api/v1/admin/book-codes/activate', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: `Bearer ${data.data.access_token}`,
        },
        body: JSON.stringify(code),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.data)
        })
        .catch(error => {
          console.error('Error:', error)
        })

      console.log(i)
    })
    .catch(error => {
      console.error('Error:', error)
    })
}