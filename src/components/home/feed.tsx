import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

function FeedSection() {
  const list = [
    {
      title: 'Orange',
      img: 'https://i.pinimg.com/736x/17/27/fd/1727fd192bbe5a91693d1fcde670f37a.jpg',
      price: '$5.50',
    },
    {
      title: 'Orange',
      img: 'https://i.pinimg.com/736x/06/7b/a4/067ba4509c13d4f3d22b9bf24ac9db16.jpg',
      price: '$5.50',
    },
    {
      title: 'Orange',
      img: 'https://i.pinimg.com/736x/ab/47/cf/ab47cfde529e646dd50808f0003b787c.jpg',
      price: '$5.50',
    },
    {
      title: 'Orange',
      img: 'https://i.pinimg.com/736x/b6/1d/72/b61d72c142857c5d32138e66ab59bf18.jpg',
      price: '$5.50',
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 pb-32">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log('item pressed')}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-48"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
export default FeedSection;
