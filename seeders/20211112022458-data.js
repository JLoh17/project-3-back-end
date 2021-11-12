const { Faker } = require('fakergem')

const { Category, Product } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const top = await Category.findOrCreate({ where: { catName: 'Men\'s Tops' } })
    const shoe = await Category.findOrCreate({ where: { catName: 'Men\'s Shoes' } })
    const hat = await Category.findOrCreate({ where: { catName: 'Men\'s Hats' } })

    await Product.destroy({ truncate : true })
    for (let i = 0; i < 10; i++) {
      await Product.create({
        productName: Faker.Commerce.productName(),
        description: Faker.Lorem.sentence(3),
        price: Faker.Number.between(100, 1000),
        CategoryId: top[0].id,
        Images: [
          { imageURL: Faker.LoremFlickr.image('500x500', ['shirts', 'jacket'])},
          { imageURL: Faker.LoremFlickr.image('500x500', ['shirts', 'jacket'])},
          { imageURL: Faker.LoremFlickr.image('500x500', ['shirts', 'jacket'])}
        ]
      }, {
        include: Product.Images
      })
    }

    for (let i = 0; i < 10; i++) {
      await Product.create({
        productName: Faker.Commerce.productName(),
        description: Faker.Lorem.sentence(3),
        price: Faker.Number.between(100, 1000),
        CategoryId: shoe[0].id,
        Images: [
          { imageURL: Faker.LoremFlickr.image('500x500', ['shoes'])},
          { imageURL: Faker.LoremFlickr.image('500x500', ['shoes'])},
          { imageURL: Faker.LoremFlickr.image('500x500', ['shoes'])}
        ]
      }, {
        include: Product.Images
      })
    }

    for (let i = 0; i < 10; i++) {
      await Product.create({
        productName: Faker.Commerce.productName(),
        description: Faker.Lorem.sentence(3),
        price: Faker.Number.between(100, 1000),
        CategoryId: hat[0].id,
        Images: [
          { imageURL: Faker.LoremFlickr.image('500x500', ['hat', 'fedora'])},
          { imageURL: Faker.LoremFlickr.image('500x500', ['hat', 'fedora'])},
          { imageURL: Faker.LoremFlickr.image('500x500', ['hat', 'fedora'])}
        ]
      }, {
        include: Product.Images
      })
    }
  }
}
