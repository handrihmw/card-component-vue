import { cardModel } from '@/types/cardModel'

const cardData: cardModel[] = []

for (let i = 1; i <= 3; i++) {
  const newWordpressData: cardModel = {
    value: 'lorem',
    icon: `https://picsum.photos/200/300?random=${i}`,
    title: `Lorem Ipsum ${i}`,
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit ${i + 2}`,
  }

  cardData.push(newWordpressData)
}

export { cardData }