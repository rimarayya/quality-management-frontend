import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplatesRouters from '../templates/TemplatesRoutes';
import NotFoundPage from '../common/pages/errors/NotFoundPage';
import HomePage from './pages/HomePage';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/templates/*" element={<TemplatesRouters />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;
