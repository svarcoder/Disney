import React, { useEffect } from "react";
import { DropDown, Login, Logo, Nav, NavMenu, SignOut, UserImg } from "./style";
import HeaderLogo from "../../../../asset/image/logo.svg";
import HomeIcon from "../../../../asset/image/home-icon.svg";
import SearchIcon from "../../../../asset/image/search-icon.svg";
import WatchList from "../../../../asset/image/watchlist-icon.svg";
import Original from "../../../../asset/image/original-icon.svg";
import Movie from "../../../../asset/image/movie-icon.svg";
import Seriez from "../../../../asset/image/series-icon.svg";
import { auth, provider } from "../../../firebase/firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
	selectUserName,
	selectUserPhoto,
	setSignOutState,
	setUserLoginDetails,
} from "../../../../logic/reducer/user";

const Header = (props: any) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user);
				history.push("/home");
			}
		});
	}, [userName]);

	const handleAuth = () => {
		if (!userName) {
			signInWithPopup(auth, provider)
				.then((result) => {
					setUser(result.user);
				})
				.catch((error) => {
					alert(error.message);
				});
		} else if (userName) {
			auth
				.signOut()
				.then(() => {
					dispatch(setSignOutState());
					history.push("/");
				})
				.catch((err) => alert(err.message));
		}
	};

	const setUser = (user: any) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	return (
		<Nav>
			<Logo>
				<img src={HeaderLogo} alt='Disney+' />
			</Logo>

			{!userName ? (
				<Login onClick={handleAuth}>Login</Login>
			) : (
				<>
					<NavMenu>
						<a href='/home'>
							<img src={HomeIcon} alt='HOME' />
							<span>HOME</span>
						</a>
						<a>
							<img src={SearchIcon} alt='SEARCH' />
							<span>SEARCH</span>
						</a>
						<a>
							<img src={WatchList} alt='WATCHLIST' />
							<span>WATCHLIST</span>
						</a>
						<a>
							<img src={Original} alt='ORIGINALS' />
							<span>ORIGINALS</span>
						</a>
						<a>
							<img src={Movie} alt='MOVIES' />
							<span>MOVIES</span>
						</a>
						<a>
							<img src={Seriez} alt='SERIES' />
							<span>SERIES</span>
						</a>
					</NavMenu>
					<SignOut>
						<UserImg src={userPhoto} alt={userName} />
						<DropDown>
							<span onClick={handleAuth}>Sign out</span>
						</DropDown>
					</SignOut>
				</>
			)}
		</Nav>
	);
};

export default Header;
