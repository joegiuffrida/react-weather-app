import styles from './App.module.css';
import Search from './components/search/search.component';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
