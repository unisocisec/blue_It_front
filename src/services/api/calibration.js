import axios from "axios";
import moment from "moment";

import { BaseUrl } from '../../providers/_config';
import { getTokenParameters } from '../../providers/sessionStorage';

const fetchDevices = async (pacientId) => {
  const gameToken = getTokenParameters('gameToken');

  try {
    const result = await axios.get(`${BaseUrl}/pacients/${pacientId}`, {
      headers: { gameToken },
    });

    return [
      {
        name: "Pitaco",
        ...result.data.data.capacitiesPitaco,
      },
      {
        name: "Manovacuômetro",
        ...result.data.data.capacitiesMano,
      },
      {
        name: "Cinta",
        ...result.data.data.capacitiesCinta,
      },
    ];
  } catch (error) {
    console.log(error);
    return []
  }
};

const fetchHistory = async (device, exercise, patientId) => {
  const gameToken = getTokenParameters('gameToken');

  try {
    const result = await axios.get(`${BaseUrl}/pacients/${patientId}/calibrations?sort=asc&gameDevice=${device}&calibrationExercise=${exercise}`, {
      headers: { gameToken }
    })

    const zeroPoint = [{
      date: "",
      value: 0,
    }]
    const normalizedPoints = result.data.data.map(point => {return {date: moment(point.created_at).format("DD/MM/YY"), value: point.calibrationValue}})

    return [...zeroPoint, ...normalizedPoints]
  } catch (error) {
    console.log(error);
    return []
  }
};

export { fetchDevices, fetchHistory };
