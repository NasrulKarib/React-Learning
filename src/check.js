const users = [
    {
      fullName: 'Arian',
      age: 25,
      phones: [
        { home: '343223' },
        { office: '13223' },
      ],
    },
    {
      fullName: 'Karib',
      age: 26,
      phones: [
        { home: '343223' },
        { office: '13223' },
      ],
    },
  ];
  
  users.map((user) => {
    console.log(`Name: ${user.fullName}`);
    console.log(`Age: ${user.age}`);
    user.phones.map((phone) => {
      if (phone.home) {
        console.log(`Home Phone: ${phone.home}`);
      }
      if (phone.office) {
        console.log(`Office Phone: ${phone.office}`);
      }
    });
    console.log('----------');
  });
  