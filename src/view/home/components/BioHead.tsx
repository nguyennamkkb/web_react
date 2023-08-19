import { useContext } from 'react'
import BioLabel from './BioLabel'
import { useSelector } from 'react-redux';

const info = {
  url_avatar: '/image/avt.jpg',
  fullname: 'Nguyen Luong Nam',
  bio: 'Lap trinh vien'
}

const BioHead = (props: any) => {
  const handleButtonClick = (a: any) => {
    props.onResult(a);
  };
  const counterReducer = useSelector((state: any) => state.counter);
  return (
    <div className=" mx-auto w-11/12 bg-fuchsia-700/30 h-80  rounded-b-lg  flex shadow-lg shadow-black-500/90 font-bold	 text-white">
      <div className="m-auto">
        <img src="/image/avt.jpg" alt="avatar" className="w-40	h-40 " />

        <BioLabel data={info} cc={info} ></BioLabel>
      </div>
    </div>
  )
}

export default BioHead
