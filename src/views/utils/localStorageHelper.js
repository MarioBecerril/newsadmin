export const saveNewsToLocalStorage = (news) => {
    localStorage.setItem('news', JSON.stringify(news));
  };
  
  export const getNewsFromLocalStorage = () => {
    const news = localStorage.getItem('news');
    return news ? JSON.parse(news) : [];
  };
  
  export const updateReadStatusInLocalStorage = (id, status) => {
    const news = getNewsFromLocalStorage();
    const updatedNews = news.map(item => 
      item.id === id ? { ...item, readStatus: status } : item
    );
    saveNewsToLocalStorage(updatedNews);
  };

  export const getNewsByIdFromLocalStorage = (id) => {
    const news = getNewsFromLocalStorage();
    return news.find(item => item.id === id);
  };