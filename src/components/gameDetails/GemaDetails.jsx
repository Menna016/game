import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import axios from 'axios';

export default function GemaDetails() {
    const [game, setGame] = useState(null); // Initialize as null if expecting a single object
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getGame() {
            try {
                const resp = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
                    headers: {
                        'x-rapidapi-key': '2acae727admshb78c464af19c8dfp16ddebjsnd936aaec56e2',
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                });
                setGame(resp.data); // Assuming the API returns a single game object
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch game');
                setLoading(false);
            }
        }

        if (id) {
            getGame();
        }
    }, [id]);// Include id in dependency array

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

    return (
        <div className='container text-white'>
            {game ? (
                <div className='row'>
                    <div className='col-md-4'>
                        <h1>{game.title}</h1>
                        <img src={game.thumbnail} alt={game.title} className='img-fluid' />
                    </div>
                    <div className='col-md-8'>
                        <p>{game.description}</p>
                        <p>Genre: {game.genre}</p>
                        <p>Platform: {game.platform}</p>
                        <p>Publisher: {game.publisher}</p>
                        <p>Developer: {game.developer}</p>
                        <p>status: {game.status}</p>
                        <button className=' btn btn-danger' >  <a style={{ textDecoration: 'none', color: "white" }} href={game.game_url} target='_blank' rel='noopener noreferrer'>
                            Visit Game
                        </a> </button>
                    </div>
                </div>
            ) : (
                <p>No game details available.</p>
            )}
        </div>
    );
}
