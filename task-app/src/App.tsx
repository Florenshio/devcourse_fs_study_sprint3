import BoardList from './components/BoardList/BoardList';
import ListContainer from './components/ListContainer/ListContainer';
import ActionButton from './components/ActionButton/ActionButton';
import ModalRoot from './components/ModalRoot/ModalRoot';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { openModal } from './store/slices/modalSlice';
import { logout } from './store/slices/authSlice';
import * as styles from './App.css.ts';

function App() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const handleAddBoard = () => {
    dispatch(openModal({ modalType: 'ADD_BOARD' }));
  };

  const handleLogin = () => {
    dispatch(openModal({ modalType: 'LOGIN' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Todo 보드</h1>
        <div className={styles.headerActions}>
          {isAuthenticated ? (
            <>
              <span className={styles.userInfo}>
                {user?.username} 님 환영합니다!
              </span>
              <ActionButton 
                text="+ 새 보드" 
                onClick={handleAddBoard} 
                variant="primary"
              />
              <ActionButton 
                text="로그아웃" 
                onClick={handleLogout} 
                variant="secondary"
              />
            </>
          ) : (
            <ActionButton 
              text="로그인" 
              onClick={handleLogin} 
              variant="primary"
            />
          )}
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
      <ModalRoot />
    </div>
  )
}

export default App;
