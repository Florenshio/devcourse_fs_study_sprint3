import BoardList from './components/BoardList/BoardList';
import ListContainer from './components/ListContainer/ListContainer';
import ActionButton from './components/ActionButton/ActionButton';
import { useAppDispatch } from './hooks/redux';
import { openModal } from './store/slices/modalSlice';
import * as styles from './App.css.ts';

function App() {
  const dispatch = useAppDispatch();

  const handleAddBoard = () => {
    dispatch(openModal({ modalType: 'ADD_BOARD' }));
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Todo 보드</h1>
        <div className={styles.headerActions}>
          <ActionButton 
            text="+ 새 보드" 
            onClick={handleAddBoard} 
            variant="primary"
          />
        </div>
      </header>
      <main className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <BoardList />
        </aside>
        <section className={styles.boardContent}>
          <ListContainer />
        </section>
      </main>
    </div>
  )
}

export default App;
