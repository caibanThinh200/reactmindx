import React, {useEffect , useState} from 'react'
import '../Content-Top/ContentsTop.css'
const token =JSON.parse(localStorage.getItem("token"));

function ContentsTop(props){
    const [product,setProduct]  = useState([]);
    const [cate,setCate] = useState([]);
    const [searchTitle,setSearchTitle] = useState("");
    const [searchResult,setSearchResult] = useState([]);
  

    if(product == []){
        product = "Không có sản phẩm";
    }
    const getProduct = () =>{
        fetch("Home")
        .then(res=>res.json())
        .then(json => {setProduct(json)})
        .catch(e => console.log(e))
    }
   useEffect(()=>{
       getProduct();
    },[])


    const onChange =  (e) =>{
        let name= e.target.name;
        let value = e.target.value;
        setSearchTitle(value);
   
      
    }
     
    // useEffect(() =>{

    // },[])
    
    useEffect(()=>{
        let searchString = searchTitle.trim().toLowerCase();
        fetch("/Home")
        .then(res => res.json())
        .then(json =>{
            if(searchString.length >0){
                json = json.filter((res)=>{
                    return res.nameFood.toLowerCase().match(searchString);
                    })
                setSearchResult(json);
                }
               
            })
        })
   
        
    const getCate = () =>{
       fetch("/Cate")
       .then(res => res.json())
       .then(json => {
           setCate(json)
       })
    } 
    useEffect(()=>{
       getCate()
    },[])
   const getIdCate = (e,idCate) =>{
       e.preventDefault();
       fetch("/Home/" + idCate)
       .then(res => res.json())
       .then(json =>{
           setProduct(json);
       })
       //console.log(product);
    }
   const addCart = (e,data)=>{
    e.preventDefault();
    if(token){
    fetch("/Cart",{
        method:"POST",
        headers:{
           "Authorization":"Bearer " + token.token,
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data)
    }).then((res)=>{
       if(res == "You need account to use this function"){
           alert("Bạn chưa có tài khoản");
           window.location = "/SignIn"
       }
       else
        alert("Đã thêm giỏ hàng");
        
        })
        .catch(e=>{alert("Bạn chưa đăng nhập vui lòng đăng nhập")})
        }
        else{
         alert("Ban chưa đang nhập mà mua hàng gì, ngáo à ?????");
         window.location = ("/SignIn")
        }
    }
    const getSearchById =  (e,idFood)=>{
        e.preventDefault();
         fetch("Home/idFood/"+ idFood)
        .then(res => res.json())
        .then(json =>{
           
            setProduct(json);
            document.getElementById("input-search").value = "";
        })
    }
    const getSearch = (e) =>{
       e.preventDefault();
       
       let search = document.getElementById("input-search")
       fetch("Home/search/searchFood?search="+search.value)
        .then(res => res.json())
        .then(json => {
            setProduct(json);
            document.getElementById("input-search").value = "";
        })
    } 
    return (
        <div className="top-menu ">
            <div className="wapper-button w50">
                <div className="title-menu">
                    <p>
                        MENU LIST
            </p>
                </div>
                <div className="button-top">
                {
                    cate.length > 0 ? cate.map((value,key)=>
                    
                   <button className="category" key={key} onClick = {(e)=>{getIdCate(e,value.idCategory)}}>{value.nameCategory}</button>
                
                    ):<p>loading....</p>
                    
                }
               </div>
               <br/>
                <div className="text-menu">
                    <p>
                        Đặt đồ ăn, giao hàng chỉ từ 25'
            </p>
                    <p>
                        Có 4832 địa điểm trên cả nước từ 6:30 - 22:00
            </p>
                </div>
            </div>
            <div className="contens-scroll w50">
                <form onSubmit={(e) =>{getSearch(e)}} className="search-menu" >
                    <input type="text" id="input-search" placeholder="Tìm kiếm đồ ăn..." name="search-food" onChange={(e)=>{onChange(e)}}/>
                    <button type="submit"><i className="fa fa-search" />Tìm</button>
                </form>
                
                <div className="clear" />
            { 
            
               searchResult.length > 0 &&  document.getElementById("input-search").value !== ""  ? searchResult.map((value,key) =>
                <div  id="search-show block">
             
                <div onClick={(e)=>{getSearchById(e,value.idFood)}} className="search-show-item  ">
                <div  className="search-show-item-img">
                 <img src={value.image} alt="" />
             </div>
            
             <div className="search-show-item-title">
                 <h4>{value.nameFood}</h4>
                 <p key={key} >{value.foodAdress}</p>
             </div>
             </div>
             </div>
                ):<div id="search-show "> 
            
            </div>
            }
            <div id="contens-top">
                    <div className="contens-top">
                      
                        {
                           product.length > 0? product.map((value,key)=>
                         
                           <div className="contens-top-item" >
                           <div className="contens-top-item-img">
                               <img src={value.image} alt="" />
                               <h6>{value.nameFood}</h6>
                               <h7>{value.price} VND </h7>
                               <p key={key} >{value.foodAdress} </p>
                               {/* <button style={{content:"center"}} onClick={(e)=>{addCart(e,{name:value.nameFood,price:value.price,image:value.image})}}>Thêm vào giỏ</button> */}
                               
                           </div>
                           <button style={{content:"center"}} onClick={(e)=>{addCart(e,{name:value.nameFood,price:value.price,image:value.image})}}>Thêm vào giỏ</button>
                         <p className="sale">Giảm 10%</p>
                       </div>
                           ):<div class="spinner-border text-danger" role="status">
                           <span class="sr-only">Loading...</span>
                         </div>
                        }
                        
                    </div>
                </div> 
            </div>
        </div>
    )
    
}

export default ContentsTop
   
                    
                
                

               

                   
                    
              
                    
  
   
 
  


   
 
   
   
    
 
       
       
      
      
    
            
            