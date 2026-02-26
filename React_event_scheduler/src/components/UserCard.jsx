import React from 'react';

const UserCard = ({ product }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="card-body gap-3">
        <div className="flex items-start justify-between gap-3">
          <h2 className="card-title text-lg leading-tight">{product.email}</h2>
          <div
            className={`badge ${product.isActive ? 'badge-success' : 'badge-error'}`}
          >
            {product.isActive ? 'Active' : 'Inactive'}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-base-content/60">
              User ID:
            </span>
            <span className="text-sm font-bold text-primary">
              #{product.id}
            </span>
          </div>

          {product.name && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-base-content/60">
                Name:
              </span>
              <span className="text-sm">{product.name}</span>
            </div>
          )}

          <div className="divider my-2"></div>

          <div className="flex flex-col gap-1 text-xs text-base-content/60">
            <div className="flex justify-between">
              <span>Created:</span>
              <span className="font-medium">
                {formatDate(product.createdAt)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Updated:</span>
              <span className="font-medium">
                {formatDate(product.updatedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
