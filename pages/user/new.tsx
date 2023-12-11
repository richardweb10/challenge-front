import UserNew from '../../components/user/userNew';
import Layout from '../../components/layout';

export default function user() {
    return (
        <Layout>
            <main
                className={`cotainer w-3/5 mx-auto`}
            >
                <div className="caption-top text-left font-medium text-2xl">
                Registro
            </div>
                <div className=' h-40 w-full p-5' >
                    <div className={`cotainer w-3/5 mx-auto flex justify-evenly`}>
                        <div className=''>
                            <label style={{color:'#8556AA'}}>¿Necesita ayuda?</label>


                            <div className='flex flex-row ml-4 w-60 mt-4'>
                                <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 0.703125C10.4619 0.703125 0.703125 10.4619 0.703125 22.5C0.703125 34.5381 10.4619 44.2969 22.5 44.2969C34.5381 44.2969 44.2969 34.5381 44.2969 22.5C44.2969 10.4619 34.5381 0.703125 22.5 0.703125ZM37.7663 11.2112L32.1941 16.7834C31.2284 15.1523 29.85 13.773 28.2166 12.8059L33.7888 7.23375C35.3027 8.35707 36.6429 9.69728 37.7663 11.2112ZM22.5 30.9375C17.8401 30.9375 14.0625 27.1599 14.0625 22.5C14.0625 17.8401 17.8401 14.0625 22.5 14.0625C27.1599 14.0625 30.9375 17.8401 30.9375 22.5C30.9375 27.1599 27.1599 30.9375 22.5 30.9375ZM11.2112 7.23375L16.7834 12.8059C15.1523 13.7716 13.773 15.15 12.8059 16.7834L7.23375 11.2112C8.35704 9.69726 9.69726 8.35704 11.2112 7.23375ZM7.23375 33.7888L12.8059 28.2166C13.7716 29.8477 15.15 31.227 16.7834 32.1941L11.2112 37.7663C9.69728 36.6429 8.35707 35.3027 7.23375 33.7888ZM33.7888 37.7663L28.2166 32.1941C29.8477 31.2284 31.227 29.85 32.1941 28.2166L37.7663 33.7888C36.6429 35.3027 35.3027 36.6429 33.7888 37.7663Z" fill="#8556AA" />
                                </svg>
                                </div>

                                <label className=' text-xs text-gray-700 ml-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </label>

                            </div>
                        </div>
                        <div className=''>
                            <label style={{color:'#8556AA'}}>¿Por qué registrarse?</label>


                            <div className='flex flex-row ml-4 w-60 mt-4'>
                                <div>
                                <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.1425 19.4277L23.7744 28.1641C23.247 29.2275 21.7177 29.1924 21.2343 28.1113L16.2334 17.0107L13.5966 23.3125H5.32614L21.3662 39.7041C21.9902 40.3457 23.0009 40.3457 23.625 39.7041L39.6738 23.3125H30.0849L28.1425 19.4277ZM41.6338 4.49512L41.4228 4.27539C36.8964 -0.347656 29.4873 -0.347656 24.9521 4.27539L22.5 6.78906L20.0478 4.28418C15.5214 -0.347657 8.10348 -0.347657 3.57711 4.28418L3.36617 4.49512C-0.914099 8.87207 -1.09867 15.8418 2.72457 20.5H11.7246L14.8798 12.9238C15.3545 11.79 16.9541 11.7637 17.4638 12.8887L22.5791 24.2529L26.8857 15.6484C27.4043 14.6113 28.8808 14.6113 29.3994 15.6484L31.8252 20.5H42.2754C46.0986 15.8418 45.914 8.87207 41.6338 4.49512Z" fill="#8556AA" />
                                </svg>
                                </div>

                                <label className=' text-xs text-gray-700 ml-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </label>

                            </div>
                        </div>
                        <div className=''>
                            <label style={{color:'#8556AA'}}>¿Qué está pasando?...</label>


                            <div className='flex flex-row ml-4 w-60 mt-4'>
                                <div>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.7969 0C9.75586 0 0 9.75586 0 21.7969C0 33.8379 9.75586 43.5938 21.7969 43.5938C33.8379 43.5938 43.5938 33.8379 43.5938 21.7969C43.5938 9.75586 33.8379 0 21.7969 0ZM27.3955 11.3115C28.0635 10.3096 29.5664 10.2832 30.2695 11.3115C31.3594 12.9287 31.5967 14.5547 31.6494 16.1719C31.6055 17.7891 31.3594 19.415 30.2695 21.0322C29.6016 22.0342 28.0986 22.0605 27.3955 21.0322C26.3057 19.415 26.0684 17.7891 26.0156 16.1719C26.0596 14.5547 26.3057 12.9287 27.3955 11.3115ZM13.333 11.3115C14.001 10.3096 15.5039 10.2832 16.207 11.3115C17.2969 12.9287 17.5342 14.5547 17.5869 16.1719C17.543 17.7891 17.2969 19.415 16.207 21.0322C15.5391 22.0342 14.0361 22.0605 13.333 21.0322C12.2432 19.415 12.0059 17.7891 11.9531 16.1719C11.9971 14.5547 12.2432 12.9287 13.333 11.3115ZM21.7969 37.2656C16.4707 37.2656 9.97559 33.8994 9.1582 29.0654C8.98242 28.0283 9.97559 27.167 10.9775 27.4922C13.6318 28.3447 17.5781 28.8281 21.7969 28.8281C26.0156 28.8281 29.9619 28.3447 32.6162 27.4922C33.6182 27.167 34.6025 28.0283 34.4355 29.0654C33.6182 33.8994 27.123 37.2656 21.7969 37.2656Z" fill="#8556AA" />
                                </svg>
                                </div>


                                <label className=' text-xs text-gray-700 ml-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </label>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <UserNew />
                </div>
            </main>
        </Layout>
    )
}