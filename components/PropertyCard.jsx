import Link from 'next/link';
import React from 'react';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const PropertyCard = ({ prop }) => {
  return (
    <div className='rounded-xl shadow-md relative' key={prop._id}>
      <img
        src={`/images/properties/${prop.images[0]}`}
        alt=''
        className='object-cover rounded-t-xl'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-gray-600'>{prop.type}</div>
          <h3 className='text-xl font-bold'>{prop.name}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {prop.rates.monthly
            ? prop.rates.monthly + '/mo'
            : prop.rates.weekly
            ? prop.rates.weekly + '/wk'
            : prop.rates.nightly + '/night'}
        </h3>

        <div className='flex justify-center gap-4 text-gray-500 mb-4'>
          <p>
            <FaBed className='inline mr-2' /> {prop.beds + ' '}
            <span className='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-2' /> {prop.baths + ' '}
            <span className='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-2' />
            {prop.square_feet + ' '}
            <span className='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          {prop.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Nightly
            </p>
          )}
          {prop.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Weekly
            </p>
          )}
          {prop.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Monthly
            </p>
          )}
        </div>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <FaMapMarkerAlt className='inline mr-2 text-orange-700' />
            <span className='text-orange-700'>
              {' '}
              {prop.location.city} {prop.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${prop._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
