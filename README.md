# 該項目youtube API使用說明

> **使用說明**

- API的baseURL是[https://www.googleapis.com/youtube/v3](https://www.googleapis.com/youtube/v3/search)
- 到Google Developers Console，申請一個credentials，也就是API key, 才可以使用youtube API
- 該**項目使用 `/search`api (or/search endpoint)**

> **Params介紹**

**part: string**

使用'snippet' ，會返回影片相關資訊的片段，包含描述、作者..

**maxResults: unsigned integer**

最多返回幾個影片，有效值為0~50，默認值為5

**q: string**

搜尋關鍵字

**key: string （documentation並沒有說要加這個參數，但卻是必須的）**

開發者申請的credential, API key

> **api 返回數據處理**

返回一個response object，我們需要的video list的位置是`response.data.items`

將其儲存在state

`this.setState({video:response.data.items})`

設置 video 數組中的第一項作為頁面的default selectedVideo

`this.setState({selectedVideo:reponse.data.items[0]})`

使用map方法遍歷videos數組，數組中的每一項是一個物件，

`video.id.videoId`作為list key

```jsx
const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}  
        onVideoSelect={onVideoSelect} 
        video={video}
      />
    );
  });
```

**請看以下代碼，返回數據使用說明**

影片名稱：video.snippet.title

影片來源：video.snippet.thumbnails.medium.url

影片標即：video.snippet.title

```jsx
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      /> 
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
```