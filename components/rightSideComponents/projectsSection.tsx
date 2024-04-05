import { CardComponent } from "./card"

export default function ProjectSection():JSX.Element{
  console.log('a')
  return (
    <div className="projects_section flex flex-col gap-16 lg:w-4/5 xl:w-full py-28" id='projects'>
      <CardComponent date='Mar 14 | 2024' name='Ecommerce' theme='Frontend Developer' repo='https://ecommerce-nu-wine.vercel.app/' description='Creacion de un Ecommerce con carrito de compras, pasarela de pago y una infraestructura orientada a la aplicacion de SOLID a componentes de react dentro de nextjs.' tec='Next,Nextui,Typescript,Tailwind,Stripe,Framer-motion,Axios' />
      <CardComponent date='Feb 18 | 2024' name='ETL automatization' theme='Data Engineering' repo='https://github.com/jmoc3/ETL_with_Airflow' description="Desarrollo de un flujo de trabajo capaz de extraer datos de una API pública, tratarlos para un correcto formateo y cargarlo a diferentes bases de datos mediante Apache Airflow y conexiones." tec='Airflow,Python,Docker,Mysql,Postgres,Redis,MVC arquitecture'/>
      <CardComponent date='Jan 09 | 2024' name='Breast cancer clasifier' theme='Machine Learning Development' repo='https://github.com/jmoc3/Breast-Cancer-Classifier'description="Construcción, entrenamiento y testeo de un modelo de inteligencia artificial, específicamente una red neuronal convolucional, programada para clasificar imágenes de especímenes de cáncer de mama." tec='Python,Numpy,Tensorflow,Matplotlib' />
      <CardComponent date='Dec 14 | 2023' name='Success probability calculator' theme='Data Sciencie' repo='https://github.com/jmoc3/PF_YELP_-_GoogleMaps' description='Producción de un par de modelos de inteligencia artificial, específicamente un random forest y un sistema de recomendación, uno de ellos capaz de calcular una probabilidad de éxito de un negocio respecto a un análisis especifico del mercado gastronómico ubicado en la zona sur de EE.UU.' tec='Google Cloud Platform,Python,Pandas,Numpy,Scikit-learn,Streamilt'/>
      <CardComponent date='Apr 14 | 2023' name='Pokedex' theme='Fronted Development' repo='https://golden-kangaroo-a2a299.netlify.app/'description="Creación de una pokedex con objetivos seriamente profesionales para promover el estudio global y ya poco popular de la carrera 'Maestro Pokémon'." tec='React,Typescript,Tailwind,Vite'/>
      <CardComponent date='Mar 03 | 2023' name='CRUD aplication' theme='Backend Development' repo='https://github.com/jmoc3/CRUD_Users' description="Algo ya bastante personal que quería publicar por acá porque es el primer desarrollo de algo organizado y que realmente me pareció apreciable de un estudiante de 18 años en progreso, es la primera repo pública que me atreví a subir." tec='Javascript,Ejs,Express,Morgan,Mysql,Sequelize'/>
    </div>
  )
}