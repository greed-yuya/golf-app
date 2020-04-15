let faker = require('faker');

let db = {
  products: [],
};

for (let i = 0; i < 999; ++i) {
  db.products.push({
    id: i + 1,
    name: faker.name.title(),
    company_name: faker.company.companyName(),
    comment: faker.lorem.sentences(),
    country: faker.address.country(),
    image: faker.image.imageUrl(),
    create_at: faker.date.past(),
  });
}

console.log(JSON.stringify(db));
