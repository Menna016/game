import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

export default function Shooter() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getGames() {
            try {
                const resp = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', {
                    headers: {
                        'x-rapidapi-key': '2acae727admshb78c464af19c8dfp16ddebjsnd936aaec56e2',
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                });
                setGames(resp.data); // Assuming the API returns an array of games
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch games');
                setLoading(false);
            }
        }

        getGames();
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {games.map(game => (
                    <div className="col" key={game.id}>
                        <div className="card h-100">
                            <Link to={`/gameD/${game.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={game.thumbnail} className="card-img-top w-100" alt={`Thumbnail of ${game.title}`} />

                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">{game.title}</h5>
                                    <button className='btn btn-primary px-2 py-1'>Free</button>
                                </div>
                                <p className='text-center fs-6 px-3 py-1'>{game.genre}, {game.platform}, {game.publisher}, {game.developer}</p>
                                <div className="card-footer justify-content-between d-flex">
                                    <small className="text-body-secondary">{game.genre}</small>
                                    <small className="text-body-secondary">{game.platform}</small>
                                </div>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
