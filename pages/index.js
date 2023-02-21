import { initStore } from '../store'
import { Provider } from 'mobx-react'
import MainList from '../components/MainList'
import { getPageTitle } from '../utils'

function HomePage ({ title, apiUrl, initList }) {
  const store = initStore(initList)

  return (
    <Provider store={store}>
      <MainList title={title} apiUrl=""></MainList>
    </Provider>
  )
}

export async function getServerSideProps () {
  const title = getPageTitle()
  return {
    props: {
      title,
      initList: []
    }
  }
}

export default HomePage
