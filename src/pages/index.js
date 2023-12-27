const Home = () => {
  return <div />
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/home-index',
    }
  }
}

export default Home;
