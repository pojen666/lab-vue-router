# lab-vue-router

## Description

### 觀察router父節點與子節點之間的關係

* 父節點有組件且有放置router-view
* 父節點有組件但無放置router-view
* 父節點無組件

#### 觀察結果

| 有父節點 | 有放置router-view | 是否顯示 |
| -------- | ----------------- | -------- |
| true     | true              | true     |
| true     | false             | false    |
| false    | null              | false    |


### 觀察router路徑是否可以用import的方式建立

當專案日益龐大router的index.js恐也會越來越長導致難以維護，檢查是否能將其內容拆出去

#### 觀察結果

可以，詳情請看extra-route.js