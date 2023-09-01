import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Tranding = () => {
  const { t } = useTranslation();

  const books = useSelector((state) => state.books)

  return (
    <div id="trending">
      <div className="heading d-flex flex-column align-items-center" id="Trending">
        <div><h1>{t('home.tranding.title')}</h1></div><div className="small"></div>
      </div>
      {/* <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5">
          {books.slice(0, 4).map((book) => {
            return (
              <div className="col mb-5" key={book.id}>
                <div className="card h-100">
                  <img className="card-img-top" src={book.cover_image} style={{height:'350px'}}/>
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{book.title}</h5>
                      <p className="card-text">{book.price}.00$</p>
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link to={`/details/${book.id}`} className="btn btn-outline-dark mt-auto">{t('home.tranding.btn')}</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div> */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 my-5">
          <img src='https://static1.s123-cdn-static-a.com/uploads/5171355/800_63821304a2ddf.jpg' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsDhRXXprs_HxeSK7nPPgYympYA9qhtoLzPWX4-sr8bcCrh1FOTSO3Q-j63gT2NOusPQ&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqgPrX-OgLtpgscKRYhFXFDNUa_WNDwUW6VLif7erRQkaGWYed5KompKbgo_3naoYWKs&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqXflAKVQ69HYReJd-ynJg0_DCF0Or4cOSTo9NCUm0F8MZYhDr-dclvenKwS8Hf2FQiQ&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGhcAiTshi3cds5tYYb2pb7QbZ6ntaVRIVPExnZkgenetFpvTcfX4qM7bkXp7TxT46pk&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXyJkR1xYzZh1jOn_YzKlQxxg9ChSzyfRZdgVg2Z-ODul_1-4wF_dHP3v10grQRIg1Uo&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn7Ps8UvVCgHtrsyWuXobJKjyuef-y3Hzufps_orcLQZqLxEaMAOAKPF-CB2wudzYDJ8&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHKR90YjZ-yH0yQED1Zd4C653Wy60noffWaRINAMwR9Uahimi2_EjEd6zYOVYvLkC2xA&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpGPiwA4Gds32Sx89C3VveZCcGQyLCbndT4W1wZk6GdFOKxOl__BMcjHtndwPb2w2tyw&usqp=CAU' className='pb-4'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfv68DojcGBUwl6vAg0jJ9rL0_Ww2OWaNthtpuen40Y_JwiIkvemkSvJpADqMhVfkd2o&usqp=CAU' className='pb-4'/>
          
        </div>
      </div>
        
      
    </div>
  )
}

export default Tranding
