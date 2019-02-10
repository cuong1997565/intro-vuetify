export default {
  getProduct(){
    var data ={
    "page": 2,
    "per_page": 3,
    "total": 12,
    "total_pages": 4,
    "data": [
        {
            'id': 4,
            'first_name': 'Eve',
            'last_name': 'Holt',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
       {
            'id': 4,
            'first_name': 'Eve',
            'last_name': 'Holt',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
         {
            'id': 4,
            'first_name': 'Eve',
            'last_name': 'Holt',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
    ]
}
return fetch('/listpost').then(response => data)
  }
}
