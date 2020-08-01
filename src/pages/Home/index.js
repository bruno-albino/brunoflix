import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories'


function Home() {
  const [initialsDatas, setInitialsDatas] = useState([])

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then(response => setInitialsDatas(response))
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <PageDefault>
      {initialsDatas.length === 0 && <div>Loading...</div>}

      {initialsDatas.map((categorie, indice) => {
        if (indice === 0) {
          return (
            <div key={categorie.id}>
              <BannerMain
                videoTitle={categorie.videos[0].title || 'Sem titulo'}
                url={categorie.videos[0].url || 'site.com.br'}
                // videoDescription="O que é Front-end ? Trabalhando na área"
              />

              <Carousel
                ignoreFirstVideo
                category={categorie}
              />

            </div>

          )
        }

        return (
          <Carousel category={categorie} />
        )
      })}
    </PageDefault>
  );
}

export default Home