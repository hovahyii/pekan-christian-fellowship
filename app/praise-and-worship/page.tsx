"use client";

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import songsData from './songs.json';

const SongLyricsPage = () => {
    const [selectedSong, setSelectedSong] = useState(songsData[0]);
    const [selectedDate, setSelectedDate] = useState(songsData[0].date);
  
    const handleSelectSong = (event) => {
      const selectedTitle = event.target.value;
      const selected = songsData.find(song => song.title === selectedTitle);
      if (selected) {
        setSelectedSong(selected);
      }
    };
  
    const handleSelectDate = (event) => {
      setSelectedDate(event.target.value);
      const songsOnSelectedDate = songsData.filter(song => song.date === event.target.value);
      if (songsOnSelectedDate.length > 0) {
        setSelectedSong(songsOnSelectedDate[0]);
      }
    };
  
    // Extract unique dates from the songs data
    const uniqueDates = Array.from(new Set(songsData.map(song => song.date)));
  
    return (
        <Layout>
        <header className="flex justify-center items-center py-4">
          <h1 className="text-2xl font-bold">Praise and Worship</h1>
        </header>
        <main className="flex flex-col items-center  mb-20">
          <div className="w-full max-w-lg px-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="dateSelect" className="text-lg font-semibold mb-2">Select Date:</label>
              <select id="dateSelect" className="p-2 border border-gray-300 rounded-md" value={selectedDate} onChange={handleSelectDate}>
                {uniqueDates.map((date, index) => (
                  <option key={index} value={date}>{date}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="songSelect" className="text-lg font-semibold mb-2">Select Song:</label>
              <select id="songSelect" className="p-2 border border-gray-300 rounded-md" value={selectedSong.title} onChange={handleSelectSong}>
                {songsData.filter(song => song.date === selectedDate).map((song, index) => (
                  <option key={index} value={song.title}>{song.title}</option>
                ))}
              </select>
            </div>
            <div>
              <h2 className="text-xl font-bold">{selectedSong.title}</h2>
              <p className="my-4 whitespace-pre-line ">{selectedSong.lyrics}</p>
            </div>
          </div>
        </main>

      </Layout>
    );
  };
  
  export default SongLyricsPage;