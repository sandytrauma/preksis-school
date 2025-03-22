// components/TeachersSection.tsx

import Image from 'next/image';

interface Teacher {
  name: string;
  role: string;
  image: string; // Import the image as a module
}

const teachers: Teacher[] = [
  {
    name: 'Diana',
    role: 'Pre-Kindergarten Main Teacher',
    image: '/images/diana.jpg', // Replace with your image paths
  },
  {
    name: 'Roby',
    role: 'Kindergarten Main Teacher',
    image: '/images/roby.jpg',
  },
  {
    name: 'Karol',
    role: 'Director and Grades 5/6 Main Teacher',
    image: '/images/karol.jpg',
  },
  {
    name: 'Sulamita',
    role: 'Grades 3/4 Main Teacher',
    image: '/images/sulamita.jpg',
  },
  {
    name: 'Catherine',
    role: 'Co-Director and Grades 1/2 Main Lead English Teacher',
    image: '/images/catherine.jpg',
  },
];

const TeachersSection = () => {
  return (
    <section className="py-16 m-16 bg-gray-100 rounded-md">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Teachers</h2>
        <div className="flex flex-wrap justify-center items-center gap-8"> {/* Added flex-wrap and gap-8 */}
          {teachers.map((teacher) => (
            <div key={teacher.name} className="flex flex-col items-center w-full sm:w-auto"> {/* Added w-full sm:w-auto */}
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image src={teacher.image} alt={teacher.name} width={160} height={160} />
              </div>
              <h3 className="text-lg font-semibold mt-4">{teacher.name}</h3>
              <p className="text-sm text-gray-600">{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;