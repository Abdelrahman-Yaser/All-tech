import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface User {
  name: string;
  email: string;
  profileImage: string;
  products: Product[];
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>
      </div>

      {/* Products */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        Products
      </h3>
      <div className="space-y-3">
        {user.products.map((product) => (
          <div
            key={product.id}
            className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-md object-cover mr-4"
            />
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold">
                {product.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
