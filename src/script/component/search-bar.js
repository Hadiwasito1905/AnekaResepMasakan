class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 5px;
           display: flex;
           position: sticky;
           top: 10px;
           right: 20px;
           background-color: white;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid #603601;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid #603601;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: #603601;
           font-weight: normal;
           font-size: 15px;
       }
      
       .search-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: #603601;
           color: white;
           border: 0;
           text-transform: uppercase;
           font-weight: bold;
           font-size: 15px;
       }

        h2
        {
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 180%
            word-spacing : 2px;
            text-align: center;
            margin-bottom: 30px;
        }

        h2:after
        {
            display: block;
            height: 2px;
            background-color: #CC9544;
            content: " ";
            width: 100px;
            margin: 0 auto;
            margin-top: 30px;
        }

        .row
        {
            max-width: 1140px;
            margin: 0 auto;
        }

        .row .long-copy
        {
            margin-bottom : 30px;
            text-align : center;
        }

        @media screen and (max-width: 1000px){
           h2
           {
                font-size: 140%;
           }

            .row .long-copy
            {
               font-size: 18px;
            }

            .search-container > button 
            {
                font-size: 13px;
            }
       }

        @media screen and (max-width: 700px)
        {
           h2
           {
                font-size: 130%;
           }

            .row .long-copy
            {
               font-size: 17px;
            }

            .search-container > button 
            {
                font-size: 12px;
            }
        }
    
        @media screen and (max-width: 580px)
        {
            h2
            {
                font-size: 120%;
            }
        }

       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
               text-align : center;
           }
      
           .search-container > button {
               width: 100%;
           }
       }

        @media screen and (max-width: 400px){
           h2
            {
                font-size: 100%;
            }
       }

         @media screen and (max-width: 360px){
           .search-container >  input::placeholder {
               font-size: 13px;
           }
       }
       </style>
        <div class= "row">           
                <h2>Lebih mudah mendapatkan hidangan favorit Anda</h2>
                <p class="long-copy">Panduan resep makanan lezat sesuai permintaan Anda. Jadi cari saja apa yang ingin Anda makan, dan kami akan memandu Anda untuk membuatnya!</p>
        </div>
        <div id="search-container" class="search-container">
            <input placeholder="Cari disini" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
