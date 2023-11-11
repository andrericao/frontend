import Users from './pages/Users';
import Footer from '../components/Footer';

export default function RouteList(){
	return (
		<BrowserRouter>
			<Header />
				<main>
					<Routes>
						<Route path="/" element={<MeuForm />} />
						<Route path="users" element={<Users />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
		</BrowserRouter>
	);
}