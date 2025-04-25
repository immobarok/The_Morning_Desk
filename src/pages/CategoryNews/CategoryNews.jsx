import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

function CategoryNews() {
   const { id } = useParams();
   const [newsData, setNewsData] = useState([]);

   useEffect(() => {
      fetch('/news.json')
         .then(res => res.json())
         .then(data => {
            const filteredNews = data.filter(news => news.category_id === id);
            setNewsData(filteredNews);
         });
   }, [id]);

   return (
      <div className="space-y-4 mt-4">
         {newsData.map((news, index) => (
            <NewsCard key={index} news={news} />
         ))}
      </div>
   );
}

export default CategoryNews;
