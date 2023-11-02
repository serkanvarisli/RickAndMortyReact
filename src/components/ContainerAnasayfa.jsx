import React from "react";
import bg from "../assets/bg.jpg";
const ContainerAnasayfa = () => {
  const styles = {
    container: {
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
    },
  };
  return (
    <div>
      <div style={styles.container}>
        <div className="yazicontainer">
          <p className="yazi">
            Rick and Morty, Justin Roiland ve Dan Harmon tarafından Adult Swim
            için yaratılan bir yetişkin animasyon televizyon dizisidir. Dizi,
            kendi zamanlarını aile hayatı ve boyutlar arası yolculuk arasında
            bölüştürmüş alkolik bilim insanı Rick ve onun torunu Morty'nin
            maceralarını anlatır. Dizide Chris Parnell, Spencer Grammer ve Sarah
            Chalke'in sesi başroldeki karakterleri seslendirken diğer
            karakterleri Roiland seslendirir. Dizinin ilk halleri Roiland
            tarafından Channel 101 film festivali için hazırlanmıştır. Adult
            Swim, televizyon şovu fikirleri için Harmon ile görüştü; o ve
            Roiland iki karaktere dayalı televizyon programını hazırlamaya
            başladılar. Dizi, 2 Aralık 2013 tarihinde eleştirel övgüyle galasını
            yaptı. 26 Temmuz 2015 tarihinde dizi ikinci bir sezon için, Ağustos
            2015'te dizi üçüncü bir sezon için yenilendi. Dördüncü sezon 10
            Kasım 2019'da gösterime girdi. Beşinci sezon ise 20 Haziran 2021'de
            başladı ve on bölümden oluşuyor.
          </p>
          <p className="yazi">
            Parlak zekalı fakat alkolik bilim adamı Rick, başka dünyalara ve
            alternatif boyutlara çılgın kaçamaklar yaparken huysuz torunu
            Morty'i de zorla yanında götürür.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContainerAnasayfa;
