/*
function Profile () {
    return (
        <diV>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Golu Kumar"
            age={30}
            greeting = {
                <div> 
                    <strong>Hi Golu, have a wonderful day !</strong> 
                </div>
            } // jsx use this line, hi Golu... greeting.
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Anaya"
            age={28}
            greeting = {
                <div>
                    <strong>Hi Anaya, have a great day too!</strong>
                </div>
            }
            >
                <p>Hobbies: Painting, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </diV>
    );

}

export default Profile;

function ProfileCard ({ name, age, greeting , children}) {
   // const { name, age, greeting , children} = props;
    return (
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    );
}

*/












import React from "react";
import PropTypes from "prop-types";

function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Golu Kumar"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Golu, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Anaya"
                age={28}
                greeting={
                    <div>
                        <strong>Hi Anaya, have a great day too!</strong>
                    </div>
                }
            >
                <p>Hobbies: Painting, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

export default Profile;

function ProfileCard({ name, age, greeting, children }) {
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <div>{greeting}</div>
            <div>{children}</div>
        </>
    );
}

// Add PropTypes for validation
ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    greeting: PropTypes.element.isRequired,
    children: PropTypes.node, // Children can be any valid React node
};
