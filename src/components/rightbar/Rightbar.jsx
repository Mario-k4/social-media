import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="assets/add.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Barcelona</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">In a relationship</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/people/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Cena</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/people/3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Cena</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/people/4.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Cena</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/people/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Cena</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/people/6.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Cena</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/people/7.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Cena</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar;