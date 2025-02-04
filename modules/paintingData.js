export const paintingData = [
  // Урд Хана
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 1}.jpg`, // зурагны зам
    width: 5, // зургийн өргөн
    height: 3, // зургийн өндөр
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // зургийн байрлал
    rotationY: 0, // эргэх өнцөг
    info: {
      title: `Миний танилцуулга ${i + 1}`, // нэр
      artist: "Нямдорж Бат-Эрдэнэ", // уран бүтээлч
      description: `Энэ бүтээл нь урлагийн хосгүй үзэгдлийг харуулж, утгагүй шүлгийн үгсээр чимэглэгдсэн.`, // тайлбар
      year: `2015 онд бүтээсэн`, // он
      link: "https://github.com/ChrisDash6" // холбоос
    }
  })),
  // Арын Хана
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `гоо сайхан ${i + 5}`,
      artist: "Сүрэнжав Төмөрбаатар", // уран бүтээлч
      description: `Бүтээл нь өнгөний ялгарал, хэт мэдрэмжтэй шидэгдсэн. Утгагүй тайлбар, хязгааргүй агуулга.`, // тайлбар
      year: `2018 онд бүтээсэн`,
      link: "https://github.com/ChrisDash6"
    }
  })),
  // Зүүн Хана
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Чөлөөт байдал ${i + 9}`,
      artist: "Энхтуул Жамбалдорж", // уран бүтээлч
      description: `Өнгө, хөдөлгөөн, хөгжим бүгдээрээ нэг дор холилдон, дуугүй байдалд бидний сэтгэл хөдлөлийг илэрхийлнэ.`, // тайлбар
      year: `2019 онд бүтээсэн`,
      link: "https://github.com/ChrisDash6"
    }
  })),
  // Баруун Хана
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Амьдрал ${i + 13}`,
      artist: "Мөнхсайхан Бадамсүрэн", // уран бүтээлч
      description: `Энэхүү бүтээл нь тайван амьдралын зургийг дүрсэлдэг бөгөөд үүний утга нь мэдрэмжийн таашаал юм.`, // тайлбар
      year: `2020 онд бүтээсэн`,
      link: "https://github.com/ChrisDash6"
    }
  }))
];
